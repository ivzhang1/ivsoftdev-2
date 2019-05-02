import random

def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'

    return inner

@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greetings)

greet_heading = make_HTML_heading(greet)
#print(greet_heading())
print(greet())

# def closure():
#     fib_memos = {0, 1}
#
#     def fib_calc(i):
#         while(len(fib_memos) < i+1):
#             fib_memos.append(fib_memos[-1] + fib_memos[-2])
#             #print(fib_memos)
#         return fib_memos[-1]
#
#     return fib_calc
#
# fibby = closure()
# print(fibby(10))

def memos(f):
    fib_memos = {}

    def helper(x):
        if x not in fib_memos.keys():
            fib_memos[x] = f(x)
        return fib_memos[x]

    return helper

#@memos
def fib(n):
    if n == 0:
        return 0

    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
    # while(len(fib_memos) < i+1):
    #     nonlocal fib_memos
    #     fib_memos.append(fib_memos[-1] + fib_memos[-2])
    #     #print(fib_memos)
    # return fib_memos[-1]

print(memos(fib)(10))
