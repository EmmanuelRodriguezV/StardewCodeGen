import json
import os
import requests
from bs4 import BeautifulSoup
import re
import time

script_dir = os.path.dirname(os.path.abspath(__file__))
filePath = os.path.join(script_dir, "StardewItemCodes.json")
f = open(filePath)
data = json.load(f)
f.close()

folder_structure_pattern = r'^/mediawiki/images/[a-f0-9]+/[a-f0-9]+/[a-zA-Z_]+\.[a-z]+$'
assets_dir = os.path.join(os.path.dirname(__file__), "assets")
if not os.path.exists(assets_dir):
    os.makedirs(assets_dir)

for item in data:
    item_title = item['itemTitle']
    print(f"Processing item: {item_title}")
    
    url = f"https://stardewvalleywiki.com/{item_title}"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    
    first_image_tag = soup.find("img")
    
    if first_image_tag:
        src_value = first_image_tag.get("src")
        
        if src_value and re.match(folder_structure_pattern, src_value):
            image_url = f"https://stardewvalleywiki.com{src_value}"
            image_response = requests.get(image_url)
            
            if image_response.status_code == 200:
                image_filename = src_value.split('/')[-1]
                image_path = os.path.join(assets_dir, image_filename)
                
                with open(image_path, "wb") as image_file:
                    image_file.write(image_response.content)
                print(f"Image '{image_filename}' downloaded and saved as '{image_path}'.")
                
                # Update the JSON data with the new field srcImageName
                item['srcImageName'] = image_filename
                with open(filePath, 'w') as json_file:
                    json.dump(data, json_file, indent=4)
                print(f"JSON updated with srcImageName: {image_filename}")
                
            else:
                print(f"Failed to download image '{src_value}'. Status code: {image_response.status_code}")
        else:
            print(f"No match found for src value: {src_value}")
    else:
        print("No image tags found for this item.")
    
    time.sleep(1)
