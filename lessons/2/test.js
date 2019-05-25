// Mocha transfer test
const accountAseed = "autumn equal fresh clean like develop report thumb vote box voyage refuse";

const accountBseed = "lava spice play wide unfold bread ladder clinic give neither sell minute";
const accountBAddress = "3NB1wVAXDtVvHGfe8yb9cykBhJuHUuBRaZV";

it('transfer', async function () {
	let tx = await broadcast(transfer({
		amount: 500000000,
		recipient: accountBAddress
	}, accountAseed));
	await waitForTx(tx.id);
	console.log(JSON.stringify(tx));
});

it('data transfer', async function () {
	let aboutObject = {
		"name": "Aleksei Popyshev",
		"occupation": "Founder @ Ventuary Lab"
	};
	let aboutString = JSON.stringify(aboutObject);
	
	let tx = await broadcast(data(
	{data: [{
		key: "web3-online-course-user-data",
		value: aboutString
	}]},
	accountAseed
	));
	await waitForTx(tx.id);
	console.log(JSON.stringify(tx));
});



it('transfer B -> smart account A', async function () {
	let tx = await broadcast(transfer({
		amount: 10000000,
		recipient: address(accountAseed)
	}, accountBseed));
	await waitForTx(tx.id);
	console.log(JSON.stringify(tx));
});