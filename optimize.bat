@echo off
echo =========================================
echo KJ Kakehashi Image Optimizer
echo =========================================
echo.
echo Optimizing images in public/gallery_raw...
echo Please wait...
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0optimize.ps1"

echo.
echo =========================================
echo Optimization Complete!
echo Press any key to exit.
echo =========================================
pause > nul
