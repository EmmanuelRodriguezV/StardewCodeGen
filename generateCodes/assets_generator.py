import json
import os
import requests
from bs4 import BeautifulSoup
import re
script_dir = os.path.dirname(os.path.abspath(__file__))
# Save JSON output to a file in the same directory as the script
filePath = os.path.join(script_dir, "StardewItemCodes.json")
f = open(filePath)
data = json.load(f)
print( data[300]['itemTitle'])
# for code in data:
#     print (code)
# URL of the webpage to scrape
url = "https://stardewvalleywiki.com/" + data[300]['itemTitle']  # Replace with the actual URL

# Send an HTTP GET request to the webpage
response = requests.get(url)

# Parse the HTML content using Beautiful Soup
soup = BeautifulSoup(response.content, "html.parser")

# Find all image tags within the HTML
image_tags = soup.find_all("img")

# Regular expression pattern for the desired folder structure
folder_structure_pattern = r'^/mediawiki/images/[a-f0-9]+/[a-f0-9]+/[a-zA-Z_]+\.[a-z]+$'

# Create the assets directory if it doesn't exist
assets_dir = os.path.join(os.path.dirname(__file__), "assets")
if not os.path.exists(assets_dir):
    os.makedirs(assets_dir)

# Loop through image tags and download matching images
for img_tag in image_tags:
    src_value = img_tag.get("src")
    
    if src_value and re.match(folder_structure_pattern, src_value):
        image_url = f"https://stardewvalleywiki.com{src_value}"  # Replace with the base URL
        image_response = requests.get(image_url)
        
        if image_response.status_code == 200:
            image_filename = src_value.split('/')[-1]  # Get the filename from the URL
            image_path = os.path.join(assets_dir, image_filename)
            
            with open(image_path, "wb") as image_file:
                image_file.write(image_response.content)
            print(f"Image '{image_filename}' downloaded and saved as '{image_path}'.")
        else:
            print(f"Failed to download image '{src_value}'. Status code: {image_response.status_code}")
    else:
        print(f"No match found for src value: {src_value}")
