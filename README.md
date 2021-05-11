# Ethermine Stat recorder


### Setup

1. Clone repo
```
git clone url
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