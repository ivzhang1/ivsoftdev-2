def union(s0, s1):
    return set(list(s0) + list(s1))

print(union({1,2,3}, {2,3,4}))

def intersection(s0, s1):
    l = union(s0, s1)
    l = filter(lambda x: x in s0, l)
    l = filter(lambda x: x in s1, l)
    return set(l)

print(intersection({1,2,3}, {2,3,4}))

def set_difference(s0, s1):
    return set(filter(lambda x: x not in s1, s0))

print(set_difference({1,2,3}, {2,3,4}))
print(set_difference({2,3,4}, {1,2,3}))

def sym_difference(s0, s1):
    return set_difference(union(s0,s1), intersection(s0,s1))

print(sym_difference({1,2,3}, {2,3,4}))
