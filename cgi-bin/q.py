import csv
# transform a single question and answer,
#
def transformData(data):
    print ("Content-type:application/json\r\n\r\n")
    print (data)


if __name__=="__main__":
    # Parse the CSV file
    with open("./cgi-bin/testbench.csv", "r") as csvfile:
        reader = csv.reader(csvfile, delimiter=",")
        headers = next(reader)
        data = list(reader)
        transformData(data[0]);
        



