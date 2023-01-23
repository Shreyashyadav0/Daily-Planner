# Daily-Planner
Daily planner

-> Just for you 
-> Checklist
->9AM- 8PM
Scheduling = [ "String", ---=]
starting -> whether you fininshed the last job ans its time to start next task
middle - Motivational quotes also.]
start 9Am -> its time to work.

whenever we have task at an interval we use Node-cron
we have to implement Web-push nodification own our own in tha
we are going to store our schedule in redis
Redis is temporary storage which stores the data in the ram for faster execution
Redis has 2 function .get ("") and .set("key") and it only stores the string so we have to convert everyting to string before 
json.stringfy
connect()
.get("")
.set("key", "{}")  Redis also have pub/sub just like sockets it is two way communicaiton .emit= pub (publition) .on =sub 
redis is one way but very fast , sockets use lot of CPU so we use resis also redis streams where it send small data [] [] []

to get the data in redis we simply use
const createSchedule = async (req, res) => {
  try {
    const { schedule, subscription } = req.body;

    await RedisClient.set("schedule", JSON.stringify(schedule));
    await RedisClient.set("subscriberClient", JSON.stringify(subscription));

    console.log(schedule);
    console.log(subscription);

here we are using the service worker where it does the work for me even if browser is not open.
also i have the uploaded this project on railways,  just make the account connect the git hub repo and add the database init by selecting from  the side bar databse

for web push we are using service worker then we have to send navigotor.serviceWorkerreginster whatever file we want to run in background.
then check weather push message is supported or not then allow the permision then subscribe the pushManager pass the userVisibity as true 

then in backend set the public key and private key
then webpush send nodification with webpush.sendNodification then just show nodification.
