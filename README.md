# CoxInsuranceGroup

Steps to follow:

1) Install Node.js from https://nodejs.org/en/download/ if not downloaded yet. You can check if you have Node.js installed already by opening a Command Prompt and running 'node --version'. Kindly use npm version above 10.

2) Check if you already have angular cli installed on your system, check if angular cli version is above 8.0. The command to check angular cli version is 'ng --version'. If the version is below 8.0, open a Command Prompt / PowerShell window and install angular cli using the command 'npm install @angular/cli'. After installing you can re-check the version by using 'ng --version' command.

3) download the repository of the project from the following url: https://github.com/vberi02/CoxInsuranceGroup . Kindly use the Download Code button on the right side of the repository name in the GitHub webpage and selecting 'Download ZIP'.

4) Unzip / Extract the folder 'CoxInsuranceGroup-master' and place it in an accessible location. (Eg: C:\CoxInsuranceGroup-master)

5) open a Command Prompt window and change directory to 'C:\CoxInsuranceGroup-master\CoxInsuranceGroup_Angular\ClientApp\src\app\vehicle-info' (for my case, you may have a different directory start). We want our Command Prompt to execute in 'vehicle-info' folder. It is in CoxInsuranceGroup_Angular\ClientApp\src\app\ directory of the extracted zip file.

6) run the command 'npm i @angular/core@8.2.12' in Command Prompt opened in the above step. This should also install other dependencies required by the program.

7) run command 'ng --version' in the same Command Prompt to check if everything was installed properly. 
The output should be as follow:
Angular CLI: 8.3.28
Node: 12.18.2
OS: win32 x64
Angular: 8.2.12
... animations, common, compiler, core, forms, platform-browser
... platform-browser-dynamic, platform-server, router

Package                                    Version
--------------------------------------------------------------------
@angular-devkit/architect                  0.803.28
@angular-devkit/build-angular              0.803.28
@angular-devkit/build-optimizer            0.803.28
@angular-devkit/build-webpack              0.803.28
@angular-devkit/core                       8.3.28
@angular-devkit/schematics                 8.3.28
@angular/cli                               8.3.28
@angular/compiler-cli                      8.2.14
@angular/language-service                  8.2.14
@ngtools/webpack                           8.3.28
@nguniversal/module-map-ngfactory-loader   8.1.1
@schematics/angular                        8.3.28
@schematics/update                         0.803.28
rxjs                                       6.6.0
typescript                                 3.5.3
webpack                                    4.39.2

8) run command 'ng serve --open' to start the angular server. It should open the webpage once it builds the project successfully.

9) after the website opens in your browser, use your VIN numbers to get details of your vehicle.


