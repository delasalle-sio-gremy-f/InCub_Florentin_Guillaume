@echo off
SET myPath=%cd%

echo Installation du serveur
cd %myPath%\tp_in-cub_api\in-cub-api
call npm install

echo Installation du client
cd %myPath%\tp_in-cub
call npm install

echo.
echo.
echo.
echo *******************************************
echo Installation terminee !
echo -------------------------------------------
echo Pour lancer l'api sur le port 3000 :
echo cd %myPath%\tp_in-cub_api\in-cub-api
echo node .
echo -------------------------------------------
echo Pour lancer l'angular sur le port 4200 :
echo cd %myPath%\tp_in-cub\src
echo ng serve
echo *******************************************

pause