

def email(fname, lname):
    email = f"{fname.lower()}.{lname.lower()}@evolveu.ca"
    print(email)


email("Larry", "Shumlich")
email("Heiko", "Peters")

data = {48535: 0.15, 48534: 0.205, 53404: 0.26,
        63895: 0.29, float('inf'): 0.33}
        
def tax(income):
    try:
        float(income)
        tax = 0
        for bracket, rate in data.items():
            if income >= bracket:
                tax += (bracket * rate)
            else:
                if income >= 0:
                    tax += (income * rate)
            income -= bracket
            if income < 0:
                break
        return round(tax, 2)    
    
    except:
        return "not a valid number"


# tax calculator
data = {48535: 0.15, 48534: 0.205, 53404: 0.26,
        63895: 0.29, float('inf'): 0.33}


