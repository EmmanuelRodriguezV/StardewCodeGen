import json
import re
from Codes import  stardewItemsString as codesString
import os

class StardewItem:
    def __init__(self, code, titleCode, description):
        self.code = code
        self.titleCode = titleCode
        self.description = description
    def to_dict(self):
        return {
            'code': self.code,
            'itemTitle': self.titleCode,
            'description': self.description
        }

def convert_to_json(string):
    pattern = re.compile(r'\[(\d+)\]\s+(\w+)\s+(.+)')
    matches = pattern.findall(string)
    stardewItems = []
    
    for match in matches:
        stardewItem = StardewItem(match[0], match[1], match[2])
        stardewItems.append(stardewItem)   
    serialized_items = [item.to_dict() for item in stardewItems]
    return json.dumps(serialized_items, default=lambda x: None, indent=2)  # Adding pretty-printing indent

if __name__ == "__main__":
    print('Printing Values:\n')
    jsonStardewItems = convert_to_json(codesString)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Save JSON output to a file in the same directory as the script
    output_path = os.path.join(script_dir, "StardewItemCodes.json")
    with open(output_path, "w") as json_file:
        json_file.write(jsonStardewItems)
    
    print('JSON data saved to "output.json"')
    