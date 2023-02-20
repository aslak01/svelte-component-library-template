GREEN='\033[0;32m'
BLUE='\033[1;34m'
NC='\033[0m'

echo "Transpiling css-files in ./$1. (Minifying, applying vendor prefixes, and lowering syntax)"
echo "See <broswerslist> to modify browser targets."

for file in $(find ./$1 -type f -name "*.css"); do
    filepath=$(dirname "$file")
    filename=$(basename "$file" .css)

    echo -e "${BLUE}Applying vendor prefixes, minifying, and lowering syntax of ${NC}$filepath/$filename.css"
    pnpm lightningcss "$file" -o "$filepath/$filename.css" --browserslist -m
done

echo -e "${GREEN}Transpiling was successful${NC}"
