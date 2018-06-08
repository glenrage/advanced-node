function findViolations(datafeed) {
  const hash = {};
  let result = [];
  let maxComplete = 0;

  for (var i = 0; i < datafeed.length; i++) {
    let el = datafeed[i];
    let splitted = el.split(';');
    let contracter = splitted[0];
    let finishOrStart = splitted[1];

    if (hash[contracter]) {
      if (finishOrStart === 'START') {
        console.log({ [contracter]: hash[contracter] });
        hash[contracter] = { mostRecentComplete: maxComplete, line: i };
      } else console.log(hash[contracter]['mostRecentComplete']);
      if (parseInt(finishOrStart) < hash[contracter]['mostRecentComplete']) {
        result.push({ [contracter]: hash[contracter] });
      } else {
        maxComplete =
          maxComplete < parseInt(finishOrStart)
            ? parseInt(finishOrStart)
            : maxComplete;
      }
      // if the name does not already exists, check to see if
    } else {
      hash[contracter] = { mostRecentComplete: maxComplete, line: i };
    }
    console.log('hash', hash);
  }

  return result;
}
