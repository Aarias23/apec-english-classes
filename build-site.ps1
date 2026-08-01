$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$distRoot = Join-Path $projectRoot "dist"
$serverRoot = Join-Path $distRoot "server"
$clientRoot = Join-Path $distRoot "client"
$clientAssets = Join-Path $clientRoot "assets"

New-Item -ItemType Directory -Force -Path $serverRoot, $clientAssets | Out-Null

Copy-Item -LiteralPath (Join-Path $projectRoot "worker\static-worker.js") -Destination (Join-Path $serverRoot "index.js") -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "course-hub.html") -Destination (Join-Path $clientRoot "index.html") -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "course-hub.html") -Destination (Join-Path $clientRoot "course-hub.html") -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "classroom.html") -Destination $clientRoot -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "unit2-class.html") -Destination $clientRoot -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "midterm-review.html") -Destination $clientRoot -Force

$siteAssets = @(
  "site.css",
  "lesson-data.js",
  "unit2-complete.js",
  "hub.js",
  "classroom.js",
  "review.js"
)

foreach ($asset in $siteAssets) {
  Copy-Item -LiteralPath (Join-Path $projectRoot "assets\$asset") -Destination $clientAssets -Force
}

Write-Output "Static classroom site built in dist."
