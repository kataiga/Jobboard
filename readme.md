# Quest-Board
> Finding a job or an employee is an adventure. 
> 
> Let us help you!
## Get Started ! ;)
### Download project
* (https) <code>git clone https://github.com/EpitechMscProPromo2024/T-WEB-501-PAR-5-1-jobboard-mathys.dupont.git</code>
* (ssh) <code>git clone git@github.com:EpitechMscProPromo2024/T-WEB-501-PAR-5-1-jobboard-mathys.dupont.git</code>
### Build project
* <code>make build</code> If you dont have **make** in your device please see the folowing link :
  * **For linux users (Debian based):** https://zoomadmin.com/HowToInstall/UbuntuPackage/make
  * **For Macos users:** https://formulae.brew.sh/formula/make
  * **For Windows users:** Get out. <img width="35" src="https://image.noelshack.com/fichiers/2016/39/1475430684-risitas.png">
### Run Project
* <code>make run</code> (It run back, front & DB project)
### Stop Project
* <code>make stop</code> (It stop back, front & DB daemons)
### Install Project
* <code>make install</code> (It install front & back project deps. Use it when you pull a branch)
### Log Project
* <code>make log</code> (log all projects)
* <code>make log-front</code> (log front project)
* <code>make log-back</code> (log back project)
* <code>make log-db</code> (log DB project)
* <code>make log-upgrade</code> (upgrade log's conf)
### Base URLs
* **Back-end :** <code>http://127.0.0.1:4000/</code>
* **Front :** <code>http://localhost:3000</code>
* **DB :** <code>http://localhost:5432</code>
* **Adminer (DB) :** <code>http://localhost:8080</code>
* **StoryBook :** <code>http://localhost:6006</code> (to launch it, do : <code>cd quest_board_front</code> and <code>yarn storybook</code>)
* **Figma :** <code>https://www.figma.com/file/XS9h6QessxEe0FAjW3M9Xe/Quest-board?node-id=0%3A1</code>
### Enjoy ! 🚀
<br>

## Project Management
### Collaboration rules
* New Feat / Config / Poc / Fix => new branch
* Branch nomenclature => <code>[contribution type]/[optional]/[contribution]</code> **ex:** <code>Fix/wording</code> **or:** <code>Feat/requests/graphql</code>
* No merges on **dev** or **master** without **pull requests** (if possible)
* Use as possible **github's issues system** to report problems / bugs
* Commit nommenclature => <code>[contribution type] ([target]) [commit message]</code> **ex:** <code>feat(notifications) add push notifications</code>
* For js parts comment with **jsDOC** (https://jsdoc.app/) 
* For Elixir parts comment with **regular** / **doc** / **moduledoc** (https://www.culttt.com/2016/10/19/writing-comments-documentation-elixir/)
* Tests are good you know ? 👀
* Update Roadmap oftenly 🙏
* Have fun and chill out ;) These little rules are here to guide us, not to limit us 👌

## Roadmap
* ✔️ config => initialize project
* ✔️ config => ending config
* ❌ config => optimizing install / launch script for linux / mac (maybe windows)
* ✔️ config => daemonize db / front / back 
* ✔️ front => setup front structure
* ❌ back => create 4 tables(job propose, companies, workers, apply utils) CRUD
* ❌ back => auth 
* ❌ back => recover password
* ❌ back => back office utils
* ❌ front => for each offer button "learn more"
* ❌ front => for each offer details button "apply"
* ❌ front => admin view
* ❌ front => create basic components
* ❌ front => create components group
