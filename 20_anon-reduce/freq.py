f = open("story.txt", "r")
text = f.read().split()
d_words = {word: reduce(lambda x, y) for word in text}
print(d_words)

f.close()
