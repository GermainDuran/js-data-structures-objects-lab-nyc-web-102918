// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver,key,value) {
  return Object.assign({}, driver, {[key]: value});
}


// - this function should take in a driver Object, a key and a value.
// The function should not mutate the driver parameter and return a new driver that has an
// updated value for the key passed in.

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
  return Object.assign(driver, {[key]: value});

}

// - this function should work the same as updateDriverWithKeyAndValue() but it should
//  mutate the driver parameter passed in.

function deleteFromDriverByKey(driver,key) {
  const new_driver = { ...driver }
  delete new_driver[key]
  return new_driver
}

// - this function should take in a driver Object and a key. It should delete the key/value pair
// for the key that was passed in from the driver Object. This should all not actually mutate the driver
//  passed in.



function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key]
  return driver
}
// - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in.
