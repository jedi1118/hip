import csv
# transform a single question and answer,
# TODO: instead of return array data - q and a all together, concert to JSON
def transformData(data):
    print ("Access-Control-Allow-Origin:*")# just for local test only!!!
    print ("Content-type:application/json\r\n\r\n")
    print (data)

# TODO: this need to get data from ai - all py api???
if __name__=="__main__":
    # Parse the CSV file
    with open("./cgi-bin/testbench.csv", "r") as csvfile:
        reader = csv.reader(csvfile, delimiter=",")
        headers = next(reader)
        data = list(reader)
        transformData(data[0]);