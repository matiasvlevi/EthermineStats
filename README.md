# Ethermine Stat recorder
Record worker stats from (https://ethermine.org/)[https://ethermine.org/]

### Setup

1. Clone repo
```
git clone https://github.com/matiasvlevi/EthermineStats.git
```
2. Install dependencies
```
npm install
```
3. Configure `config.json`
```json
{
  "adress":"wallet_here",
  "updateFrequency":"10"
}
```
* adress : your public wallet adress.
* updateFrequency : The stat update frequency in minutes.

<br/>

### Run 
* start `run.bat` batch file.
or 
* run `npm run start`

<br/>

### Recorded Data

You can find recorded data in `./data/stat_payout_XXXX.json`
