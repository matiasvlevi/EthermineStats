# Ethermine Stat recorder
Record worker stats from [https://ethermine.org/](https://ethermine.org/) .

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

<br/><br/>




### Recorded Data

You can find recorded data in `./data/stat_payout_XXXX.json`

This is the json data structure:
```
{
  totalchecks: XXXX,
  workers: [
    {
      name: "Worker_Name",
      currentHashrate: [
        XXXX,
        XXXX,
        XXXX
        ...
      ],
      avgshare: XXXX,
      percent: XXXX
    },
    ...
  ],
  startDate: "Tue May 11 2021 17:46:18 GMT-0400 (Eastern Daylight Time)",
  lastmodifiedDate: "Tue May 11 2021 18:18:48 GMT-0400 (Eastern Daylight Time)"
}
```
