from simple_func import email, tax

def test_email():
    email("Larry", "Shumlich")
    email("Heiko", "Peters")

def test_tax():
    assert tax(50000) == 7580.57
    assert tax(100000) == 17991.78
    assert tax(300000) == 77902.87