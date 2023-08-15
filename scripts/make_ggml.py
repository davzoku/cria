# modified from https://gist.github.com/TheBloke/b9423b7ffd512724115c3cd85edcfa07
# usage: python make_ggml.py /path/to/HF_model model-name /path/to/output_directory
# example usage: python ./scripts/make_ggml.py ../llama.cpp models/cria-llama2-7b-v1.3 cria-llama2-7b-v1.3 models/
#!/usr/bin/env python3
import argparse
import os
import subprocess


def main(llamabase, model, outbase, outdir):
    # llamabase = "/workspace/venv/git/llama.cpp"
    ggml_version = "v3"

    if not os.path.isdir(model):
        raise Exception(f"Could not find model dir at {model}")

    if not os.path.isfile(f"{model}/config.json"):
        raise Exception(f"Could not find config.json in {model}")

    os.makedirs(outdir, exist_ok=True)

    print("Building llama.cpp")
    subprocess.run(
        # for windows
        # f"cd {llamabase} && git pull && make clean && LLAMA_CUBLAS=1 make"
        # for M1
        f"cd {llamabase} && git pull && make clean && LLAMA_METAL=1 make",
        shell=True,
        check=True,
    )

    fp16 = f"{outdir}/{outbase}.ggml{ggml_version}.fp16.bin"

    print(f"Making unquantised GGML at {fp16}")
    if not os.path.isfile(fp16):
        subprocess.run(
            f"python3 {llamabase}/convert.py {model} --outtype f16 --outfile {fp16}",
            shell=True,
            check=True,
        )
    else:
        print(f"Unquantised GGML already exists at: {fp16}")

    print("Making quants")
    for type in ["q4_0"]:
        outfile = f"{outdir}/{outbase}.ggml{ggml_version}.{type}.bin"
        print(f"Making {type} : {outfile}")
        subprocess.run(
            f"{llamabase}/quantize {fp16} {outfile} {type}", shell=True, check=True
        )

    # Delete FP16 GGML when done making quantisations
    os.remove(fp16)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert Bash to Python.")
    parser.add_argument("cpp", help="Llama.cpp directory")
    parser.add_argument("model", help="Model directory")
    parser.add_argument("outbase", help="Output base name")
    parser.add_argument("outdir", help="Output directory")

    args = parser.parse_args()

    main(args.cpp, args.model, args.outbase, args.outdir)
