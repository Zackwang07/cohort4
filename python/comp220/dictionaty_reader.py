import os

# List all files in a directory using scandir()
basepath = "/Users/hui/Desktop/code/cohort4/01-getting-started/src/scripts/"
file_num = 0
total_size = 0

with os.scandir(basepath) as entries:
    for entry in entries:
        if entry.is_file():
            # print(entry.name)
            file_num += 1
            info = entry.stat()
            # print(info.st_size)
            total_size += info.st_size

print(f"There are {file_num} files in this dictionary")
print(f"The total size of this dictionary is {total_size} KB")