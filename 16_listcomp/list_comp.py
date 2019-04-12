def password_check(_pass):
    error_messages = []
    if len(_pass) < 5:
        error_messages.append("Password has to be at least 5 characters long.")


    lower = [char for char in _pass if char.islower()]
    if len(lower) == 0:
        error_messages.append("Password has to have at least 1 lowercase character.")

    upper = [char for char in _pass if char.isupper()]
    if len(upper) == 0:
        error_messages.append("Password has to have at least 1 uppercase character.")

    digits = [char for char in _pass if char.isdigit()]
    if len(digits) == 0:
        error_messages.append("Password has to have at least 1 digit.")

    if len(error_messages) > 0:
        for em in error_messages:
            print(em)
        return
    else:
        return "Success"


# password_check("iiii")
