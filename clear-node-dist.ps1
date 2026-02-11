Get-ChildItem -Path . -Filter "node_modules" -Recurse | Remove-Item -Force -Recurse
Get-ChildItem -Path . -Filter "dist" -Recurse | Remove-Item -Force -Recurse
Get-ChildItem -Path . -Filter "storybook_static" -Recurse | Remove-Item -Force -Recurse