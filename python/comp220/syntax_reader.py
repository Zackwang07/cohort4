
file = "/Users/hui/Desktop/code/cohort4/01-getting-started/src/scripts/syntax.js"
with open(file, "r") as f:
    f_content = f.read()
# lines = 0
# elses = 0
# characters = 0
# for line in f:

#     lines += 1

#     characters += len(line)
    
#     line = line.strip()
#     words = line.split(" ")
#     for word in words:
#         if word == "else":
#             elses += 1

lines = len(open(file, 'r').readlines())
elses = f_content.count("else")
characters = len(f_content)




print("Total lines in Syntax.js: ", lines)
print("Total 'else' in Syntax.js: ", elses)
print("Total characters in Syntax.js: ", characters)

f.close()