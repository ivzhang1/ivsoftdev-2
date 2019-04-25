f = open("ppp.txt", "r")
text = f.read().strip().split(" ")
f.close()

word = raw_input("what word are you looking for: ").strip()

def find_word_freq(w):
    correct_words = [x for x in text if x == w]

    return(len(correct_words))

print(find_word_freq(word))

phrase = raw_input("what word phrase are you looking for: ").strip()

def find_word_phrase_freq(wp):
    phrase_combos = [text[i] + " " + text[i+1] + " " + text[i+2] for i in range(len(text)-2)]
    correct_phrases = [x for x in phrase_combos if x == wp]
    return len(correct_phrases)

print(find_word_phrase_freq(phrase))
