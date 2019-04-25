f = open("ppp.txt", "r")
text = f.read().strip().split(" ")
f.close()

word = raw_input("what word are you looking for: ").strip()
correct_words = [x for x in text if x == word]

print(len(correct_words))

phrase = raw_input("what word phrase are you looking for: ").strip()
phrase_combos = [text[i] + " " + text[i+1] + " " + text[i+2] for i in range(len(text)-2)]
correct_phrases = [x for x in phrase_combos if x == phrase]

print(len(correct_phrases))
