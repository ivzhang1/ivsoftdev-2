def union(s0, s1):
    return set(list(s0) + list(s1))

print(union({1,2,3}, {2,3,4}))

def intersection(s0, s1):
    l = union(s0, s1)
    l = filter(lambda x: x in s0, l)
    l = filter(lambda x: x in s1, l)
    return l

print(intersection({1,2,3}, {2,3,4}))
