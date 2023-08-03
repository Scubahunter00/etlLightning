import csv

# read CSV file and return a list lines
def read_CSV_to_lines(file_location):
    with open(file_location) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        csv_list = []
        for row in csv_reader:
            csv_list.append(row)
        return csv_list
    
# read CSV file and return a list of dictionaries
def read_CSV_to_dicts(file_location):
    with open(file_location) as csv_file:
        csv_reader = csv.DictReader(csv_file)
        csv_list = []
        for row in csv_reader:
            csv_list.append(row)
        return csv_list