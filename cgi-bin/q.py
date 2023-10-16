import csv
import json
import random

# transform a single question and answer,
# TODO: instead of return array data - q and a all together, concert to JSON
def generateResponse(data):
    print ("Access-Control-Allow-Origin:*")# just for local test only!!!
    print ("Content-type:application/json\r\n\r\n")
    print (json.dumps(data))

# TODO: this needs to get data from ai - call py api???
if __name__=="__main__":
    # Parse the CSV file
    with open("./cgi-bin/testbench.csv", "r") as csvfile:
        reader = csv.reader(csvfile, delimiter=",")
        headers = next(reader)
        data = list(reader)
        len = len(data);
        index = random.randint(0, len)
        generateResponse(data[index])