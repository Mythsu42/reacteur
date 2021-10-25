function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function decompte() {
  for (i = 12; i >= 0; i--) {
    if (i == 8) {
      console.log("Ignition sequence start");
      await pause(2000);
      i -= 2;
    }
    await pause(1000);
    console.log(i);
    if (i == 0) {
      console.log("All engines running\nLiftoff!");
    }
  }
}
console.log(decompte());
