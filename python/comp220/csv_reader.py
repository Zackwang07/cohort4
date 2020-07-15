import csv
import json

with open("Census_by_Community_2018.csv", "r") as csv_file:
    csv_content = csv.reader(csv_file)
    head = next(csv_content)
    count = 0
    file_class = {}
    file_sector = {}

    for row in csv_content:
        count += 1

        file_class[row[head.index("CLASS")]] = file_class.get(row[head.index("CLASS")], 0) + int(row[head.index("RES_CNT")])
        file_sector[row[head.index("SECTOR")]] = file_sector.get(row[head.index("SECTOR")], 0) + int(row[head.index("RES_CNT")])
    
    print(file_class)
    print(file_sector)

    with open("census_report.txt", "w") as report:
        report.write("File name: Census_by_Community_2018.csv\n")
        report.write(f"Total rows: {count}\n")
        report.write(f"By CLASS: {json.dumps(file_class, indent = len(file_class))}\n")
        report.write(f"By SECTOR: {json.dumps(file_sector, indent = len(file_sector))}")

csv_file.close()
        