#!/bin/bash
# copy the mergekit folder to the mergekit repo folder
# before running this script
# create an conda env named `mergekit`
# pip install -e . in this env

conda activate mergekit

# m.1 model
export CONFIG_FILE=config/frankencria-v1-3-m-1.yaml
export OUTPUT_DIR=models/cria-v1.3-m.1/

# m.2 model 
# export CONFIG_FILE=config/frankencria-v1-3-m-2.yaml
# export OUTPUT_DIR=models/cria-v1.3-m.2/

mergekit-yaml ${CONFIG_FILE} ${OUTPUT_DIR} --copy-tokenizer --out-shard-size 1B --lazy-unpickle --clone-tensors