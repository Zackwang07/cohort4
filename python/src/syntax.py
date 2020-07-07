import random


# define attributes / variables
# number
x = 1    
y = 2.8  
z = 1j   

a = float(x)
b = int(y)

print(a)
print(b)

print(type(a))
print(type(b))

print(random.randrange(1, 10))


# string
b = "Hello, World!"
print(b[2:5])

b = "Hello, World!"
print(b[-5:-2])

a = "Hello, World!"
print(len(a))
print(a.lower())
print(a.upper())
print(a.replace("o", "a"))
print(a.split(","))

a = "Hello"
b = "World"
c = a + " " + b
print(c)

quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))


# boolean
print(10 > 9)
print(10 == 9)
print(10 < 9)


# sample if / else
a = 200
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")


# functions
def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")

def my_function2(**kid):
  print("His last name is " + kid["lname"])

my_function2(fname = "Tobias", lname = "Refsnes")


# arrays
# add to the begin
thislist = ["apple", "banana", "cherry"]
thislist.insert(0, "orange")
print(thislist)

# add to the end
cars = ["Ford", "Volvo", "BMW"]
cars.append("Honda")
print(cars)

# update values
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)
# loops 
# for
# for/in
cars = ["Ford", "Volvo", "BMW"]
for x in cars:
  print(x)

for x in range(2, 30, 3):
  print(x)

# while
i = 1
while i < 6:
  print(i)
  i += 1
# do while
# forEach (with array and function)
# Objects / Dictionaries
# declare object
# lookup key to retrieve the value
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["year"] = 2018
print(thisdict)

for x in thisdict:
  print(x)

for x in thisdict:
  print(thisdict[x])

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.pop("model")
print(thisdict)