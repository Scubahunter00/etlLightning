

def flatten_config(y):
    out = {}
 
    def flatten(x, name=''):
 
        # If the Nested key-value
        # pair is of dict type
        if type(x) is dict:
 
            for a in x:
                flatten(x[a], name + a + '_')
 
        # If the Nested key-value
        # pair is of list type
        elif type(x) is list:
 
            i = 0
 
            for a in x:
                flatten(a, name + str(i) + '_')
                i += 1
        else:
            out[name[:-1]] = x
 
    flatten(y)
    out = dict_to_list_of_dicts(out)
    # print(out)
    return out

# Convert a dict to a list of dicts
def dict_to_list_of_dicts(d):
    l = []
    for key, value in d.items():
        object ={"key": key,
             "value": value}
        l.append(object)

    return l