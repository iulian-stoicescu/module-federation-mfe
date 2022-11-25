# Typescript
for file in $(find src -type f -name \*.ts ! -size 0 -exec grep -iL "copyright" {} \+); do sed -i "1i/*\n * Copyright '$(date '+%Y')' Iulian Stoicescu or its subsidiaries. All Rights Reserved.\n */" "$file"; git add $file; done
# HTML
for file in $(find src -type f -name \*.html ! -size 0 -exec grep -iL "copyright" {} \+); do sed -i "1i <!--Copyright "$(date '+%Y')" Iulian Stoicescu or its subsidiaries. All Rights Reserved.-->" "$file"; git add $file; done
# SCSS
for file in $(find src -type f -name \*.scss ! -size 0 -exec grep -iL "copyright" {} \+); do sed -i "1i/*\n * Copyright '$(date '+%Y')' Iulian Stoicescu or its subsidiaries. All Rights Reserved.\n */" "$file"; git add $file; done
#css
for file in $(find src -type f -name \*.css ! -size 0 -exec grep -iL "copyright" {} \+); do sed -i "1i/*\n * Copyright '$(date '+%Y')' Iulian Stoicescu or its subsidiaries. All Rights Reserved.\n */" "$file"; git add $file; done
