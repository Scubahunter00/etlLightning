import csv


def convert_JSON_to_CSV(json_list):
    csv_list = []
    headers = json_list[0].keys()
    csv_list.append(headers)
    for row in json_list:
        csv_list.append(row.values())
    return csv_list

def convert_CSV_to_JSON(csv_list):
    json_list = []
    headers = csv_list[0]
    for row in csv_list:
        json_list.append(dict(zip(headers, row)))
    return json_list