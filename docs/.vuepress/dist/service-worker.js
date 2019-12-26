/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "72a96efa87087c62b99893211a1c2efe"
  },
  {
    "url": "assets/css/0.styles.5463484d.css",
    "revision": "1e5bfd90f06a3b88e0908e5db994d297"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.63e0bd1a.js",
    "revision": "8bd064d5f22ba2870eca7ea533ff963c"
  },
  {
    "url": "assets/js/100.14ecc36d.js",
    "revision": "49f10b370f45eb7070f359fcb2da2a89"
  },
  {
    "url": "assets/js/101.dd032a07.js",
    "revision": "203fe6f94cd3eea1079c66cbed008833"
  },
  {
    "url": "assets/js/102.6c30ef0a.js",
    "revision": "5f1893b0d86a6c4db4e7fd59f50a40f7"
  },
  {
    "url": "assets/js/103.70b26370.js",
    "revision": "bd0325e7e1436a2409c4e2fb160430a6"
  },
  {
    "url": "assets/js/104.a29d4ea1.js",
    "revision": "3d9b5527d5c5b5ac401d4534ddc74432"
  },
  {
    "url": "assets/js/105.4ccc3b16.js",
    "revision": "fa48968aba2eed397fde1ab9d08407ac"
  },
  {
    "url": "assets/js/106.c9ade00d.js",
    "revision": "cfca117f74b747ef4fa4c4c15793f7b6"
  },
  {
    "url": "assets/js/107.29c83b46.js",
    "revision": "2cb07e6d0bfa5ecbde371e2c26c2b55a"
  },
  {
    "url": "assets/js/108.f573082f.js",
    "revision": "2703d13730f106fbf333bec18247c738"
  },
  {
    "url": "assets/js/109.44481868.js",
    "revision": "923da892071b1bd744e08d722e97be23"
  },
  {
    "url": "assets/js/11.bd0744d0.js",
    "revision": "26ed4d14ea122e81f54a0edae0352732"
  },
  {
    "url": "assets/js/110.0c95bd93.js",
    "revision": "1f5fef8e93aeba4964cdb54b31ccc493"
  },
  {
    "url": "assets/js/111.5ed66517.js",
    "revision": "d27a6557b0a4f50cbfe7602b8058dcb0"
  },
  {
    "url": "assets/js/112.ed6881d5.js",
    "revision": "9cfe17fbf1f21aeb35b9264317729999"
  },
  {
    "url": "assets/js/113.8307345b.js",
    "revision": "e88b306a047e6f2249ca704a3f8d850a"
  },
  {
    "url": "assets/js/114.eaf90f99.js",
    "revision": "db8bdd84660f0aaa14dfe62d1accef1b"
  },
  {
    "url": "assets/js/115.c7fcb070.js",
    "revision": "ad2c2f730ce80893b91bb31b6e927c67"
  },
  {
    "url": "assets/js/116.f9327bc6.js",
    "revision": "78517a425195e2eb79dfc229bd165e01"
  },
  {
    "url": "assets/js/117.34d74fc9.js",
    "revision": "b47eacfef80762189f549d9f0f3c06a5"
  },
  {
    "url": "assets/js/118.b56d91b6.js",
    "revision": "45d3abc142398c517bbb5f87268e348d"
  },
  {
    "url": "assets/js/119.b0156bf1.js",
    "revision": "f62a8d2e2141a0757487c1ce477760b0"
  },
  {
    "url": "assets/js/12.e86722c8.js",
    "revision": "9480f95651f9979440849a7a5eb625c5"
  },
  {
    "url": "assets/js/120.d4f1a09d.js",
    "revision": "9ef259850bb7e2f11ecfbf704a57f895"
  },
  {
    "url": "assets/js/121.d1e928de.js",
    "revision": "af28bc4806ef20973f4c96c53570598b"
  },
  {
    "url": "assets/js/122.6096439e.js",
    "revision": "b1389df787aa712cbd03e5753ae3d307"
  },
  {
    "url": "assets/js/123.ffd56363.js",
    "revision": "bb5679fe705c11f225c7bd5eb0a3b092"
  },
  {
    "url": "assets/js/124.21d38034.js",
    "revision": "613efce4c47038797f40d0352034d720"
  },
  {
    "url": "assets/js/125.652ddc82.js",
    "revision": "79d1a04c9b9e327b65d7c8bc4b7993b4"
  },
  {
    "url": "assets/js/126.2b70d8f4.js",
    "revision": "ae87f6f65590900feced732b01861c11"
  },
  {
    "url": "assets/js/127.c68771a3.js",
    "revision": "e8caf6bfd1a1df9eec686d8bbeb91ad1"
  },
  {
    "url": "assets/js/128.8bca8186.js",
    "revision": "6e0a74cb67327cd227ca8e8e6c39b03f"
  },
  {
    "url": "assets/js/129.903aa0d6.js",
    "revision": "eeda78f5b8849720afd5ff700169fd49"
  },
  {
    "url": "assets/js/13.09a648c7.js",
    "revision": "cd83db6c154cb4999b17b2e8b44148c5"
  },
  {
    "url": "assets/js/130.89ce52a1.js",
    "revision": "c1d230a3787674cb0f2789eb808c495c"
  },
  {
    "url": "assets/js/131.3431b5a1.js",
    "revision": "7abf1cdd40ce321b80a0e6889535af0a"
  },
  {
    "url": "assets/js/132.62d6286e.js",
    "revision": "d89c364816dab4aaa2be478436a25017"
  },
  {
    "url": "assets/js/133.5908863d.js",
    "revision": "9ef97538b6f2fc1c11a95522f12b6518"
  },
  {
    "url": "assets/js/134.c8934b5a.js",
    "revision": "6e9d9a24e78d09709a8a1e3dc335d1d9"
  },
  {
    "url": "assets/js/135.70fa023c.js",
    "revision": "246876eb66f23cc729f45ca3b730312c"
  },
  {
    "url": "assets/js/136.36e67550.js",
    "revision": "e9dbee8a9fff9182b9a07c4e1a14973e"
  },
  {
    "url": "assets/js/137.e159d278.js",
    "revision": "4a6bb7cf7da98992683ef368f36f05df"
  },
  {
    "url": "assets/js/138.b2a9213c.js",
    "revision": "c72d40647a249f71c687834519e8aa41"
  },
  {
    "url": "assets/js/139.a169295f.js",
    "revision": "1f165c08a5fb1e8b6cbdeae60f511af5"
  },
  {
    "url": "assets/js/14.8203369f.js",
    "revision": "b2007a164c215c889ea91945ee4ecf69"
  },
  {
    "url": "assets/js/140.9f03b506.js",
    "revision": "628f6f340c3531a03896a76e3b72bcf0"
  },
  {
    "url": "assets/js/141.d4efa43b.js",
    "revision": "01c0d5d457ac9c797795b48ad85d3df0"
  },
  {
    "url": "assets/js/142.8c949fd6.js",
    "revision": "0a774faefe10ecaf8321f2b6088fd878"
  },
  {
    "url": "assets/js/143.1883489f.js",
    "revision": "1460db48c0ea1d78321882a1397f4f67"
  },
  {
    "url": "assets/js/144.148612ac.js",
    "revision": "a74d53c6dc233bf4aa7ea09be1efa4fd"
  },
  {
    "url": "assets/js/145.3c9aff3c.js",
    "revision": "28a4af3514ca2cb1e66b69f7d0da3bc0"
  },
  {
    "url": "assets/js/146.2fb638fd.js",
    "revision": "fe5f6d334cde620b093229b2784ecc5a"
  },
  {
    "url": "assets/js/147.ff16bcf6.js",
    "revision": "870d9043baea2e5aabc859b5354680fb"
  },
  {
    "url": "assets/js/148.40f5a946.js",
    "revision": "65785ca8ff4173aad16f337a65e47cd4"
  },
  {
    "url": "assets/js/149.89ec80a6.js",
    "revision": "9da7906760e2401321c02a33a473017a"
  },
  {
    "url": "assets/js/15.041015b5.js",
    "revision": "52b5de7ff0b04d7db4560f94a85dc824"
  },
  {
    "url": "assets/js/150.b5c6c6f3.js",
    "revision": "f8ca122c673971a35f661a297763bebb"
  },
  {
    "url": "assets/js/151.3ce376c3.js",
    "revision": "4d01241b9ffdbe1684f52b53caae25e7"
  },
  {
    "url": "assets/js/152.96f6015e.js",
    "revision": "8d6542c4d1554293826cf3463a80553d"
  },
  {
    "url": "assets/js/153.b49ef048.js",
    "revision": "b69149c83304c89cf9362c2e9b99e965"
  },
  {
    "url": "assets/js/154.e3b993bb.js",
    "revision": "c8135669a3715cff60fcaa34046ec717"
  },
  {
    "url": "assets/js/155.21980655.js",
    "revision": "57ccef7dbd8dfd178dfdb13474c79939"
  },
  {
    "url": "assets/js/156.6ebf4a55.js",
    "revision": "36b1c36cec954edf74fe0ee52237205a"
  },
  {
    "url": "assets/js/157.61dc884c.js",
    "revision": "6da08951770faf9f4fb637e1b52530cc"
  },
  {
    "url": "assets/js/158.0cbc2c81.js",
    "revision": "aebfc4c1be2831570589e43c5dd1b331"
  },
  {
    "url": "assets/js/159.14cacf5a.js",
    "revision": "abc10783bcb2f37ff09834ba9c5f92b4"
  },
  {
    "url": "assets/js/16.50bedb81.js",
    "revision": "97b546c42220b609cc7b7a80f4e67dfc"
  },
  {
    "url": "assets/js/160.4e8f56f1.js",
    "revision": "b9c8525024f3eb57a2388d8c2bc40cd3"
  },
  {
    "url": "assets/js/161.956a1a2d.js",
    "revision": "fe1741e8eaf44ed9f8669f632eb82328"
  },
  {
    "url": "assets/js/162.3c0cf62e.js",
    "revision": "342c791da6a71d57beb6ef483eadc1c2"
  },
  {
    "url": "assets/js/163.23ab2193.js",
    "revision": "3cbafda982b5782a58eb3d0092c93a40"
  },
  {
    "url": "assets/js/164.e2388041.js",
    "revision": "b9382f023739541fda8cbce5946273a5"
  },
  {
    "url": "assets/js/165.20fa0434.js",
    "revision": "9c728cea87d7fe4ec000b52a2634a63b"
  },
  {
    "url": "assets/js/166.6e429c38.js",
    "revision": "5b32464f815af375f0ac62a33e6729a6"
  },
  {
    "url": "assets/js/167.7667a792.js",
    "revision": "8a504042595c4c0b57cf03347ba8fb6f"
  },
  {
    "url": "assets/js/168.36727362.js",
    "revision": "68df534d50e8bb0e87a973ba244ef827"
  },
  {
    "url": "assets/js/169.e5813026.js",
    "revision": "a034f2ba9d9d47d59b0b701a5cd4b342"
  },
  {
    "url": "assets/js/17.cd24a92a.js",
    "revision": "f8ee91b09438adad04dde9751fc9bec7"
  },
  {
    "url": "assets/js/170.b392a4f8.js",
    "revision": "da08e40b408c3257cedd4bddb8b47c5f"
  },
  {
    "url": "assets/js/171.1d39060d.js",
    "revision": "0e97c8a35f1a4482d8afd48839042c7d"
  },
  {
    "url": "assets/js/172.53b98336.js",
    "revision": "79f9cf4710d8eea421517c4d596c29f5"
  },
  {
    "url": "assets/js/173.b2c08d66.js",
    "revision": "af444c19e97062ec277fd2b8b2c46e59"
  },
  {
    "url": "assets/js/174.33040ad2.js",
    "revision": "13447b8968a5ee788f37dcc2c466396c"
  },
  {
    "url": "assets/js/175.5d221aed.js",
    "revision": "a878bda9a2bed82afa9f5acf44614780"
  },
  {
    "url": "assets/js/176.2bf55b74.js",
    "revision": "1f7f8f19c16430244dd0842fe17f697f"
  },
  {
    "url": "assets/js/177.ddab3810.js",
    "revision": "c758331887e9a77e570336eae68c464b"
  },
  {
    "url": "assets/js/178.a3ea9659.js",
    "revision": "80522abaa17958befdee6054af9d3d7a"
  },
  {
    "url": "assets/js/179.090dd77b.js",
    "revision": "85281748a1911a6e7b3089622b1a5685"
  },
  {
    "url": "assets/js/18.a704b655.js",
    "revision": "df5911e7a9ff56e77ff3c26957338cc8"
  },
  {
    "url": "assets/js/180.2825cf0c.js",
    "revision": "8f666d3cc5197961e60c8ae680e18774"
  },
  {
    "url": "assets/js/181.ca8f57da.js",
    "revision": "c18edaee1cf3c0c95215b3dc3e2918ff"
  },
  {
    "url": "assets/js/182.4b1c499c.js",
    "revision": "0aced3dfaee031f64c9d6516fa08d0a7"
  },
  {
    "url": "assets/js/183.a26151d0.js",
    "revision": "ad5e1c6c62a4231b52e4493f2da77816"
  },
  {
    "url": "assets/js/184.487ae7b9.js",
    "revision": "69e8ac7325edc75f40feb7105aba273a"
  },
  {
    "url": "assets/js/185.337c434b.js",
    "revision": "4dc22c41b21bbe4b18fefac43f21016f"
  },
  {
    "url": "assets/js/186.41847579.js",
    "revision": "9f85abfa339d19198f4c0b6fd43e792c"
  },
  {
    "url": "assets/js/187.6277796a.js",
    "revision": "0864d0bed703d1983f0c8472b8cff9d5"
  },
  {
    "url": "assets/js/188.f256ad04.js",
    "revision": "3eebe523dce8b97c97ee5507c2002276"
  },
  {
    "url": "assets/js/189.f205d50e.js",
    "revision": "2db10e5d01210dd81a89a9d6f86ec781"
  },
  {
    "url": "assets/js/19.8e9c4439.js",
    "revision": "2ff9ac21ac41b4fd00950937a81b04f7"
  },
  {
    "url": "assets/js/190.31400051.js",
    "revision": "712d4c1cd67b63bba079a61f012c1de9"
  },
  {
    "url": "assets/js/191.7071ac01.js",
    "revision": "2c4f3ca37851c45696ec09b1377f6e4f"
  },
  {
    "url": "assets/js/192.82f87a38.js",
    "revision": "b919fb9a5567e2df5183fd70195015b5"
  },
  {
    "url": "assets/js/193.172069b9.js",
    "revision": "31e42a2adc494bda07475bc0e27e7090"
  },
  {
    "url": "assets/js/194.f13bfde4.js",
    "revision": "ae64c26d760ca2a6c8804c4e92fe30b4"
  },
  {
    "url": "assets/js/195.789f0a62.js",
    "revision": "77f41e9baa60f911612d1967e0acf93c"
  },
  {
    "url": "assets/js/196.c3b4c0fa.js",
    "revision": "c0cddd8c87c024e37e67e6ef9fb53fe7"
  },
  {
    "url": "assets/js/197.758edd32.js",
    "revision": "f00c328a663b4d749f49c9e486e4082a"
  },
  {
    "url": "assets/js/198.4139d051.js",
    "revision": "e7fc1cd5b60050b4779bff5c2bfae412"
  },
  {
    "url": "assets/js/199.ee40dca2.js",
    "revision": "09bf2b1ee04c5429c5f6194b61e42f49"
  },
  {
    "url": "assets/js/2.a94a0ffb.js",
    "revision": "b4136b75d3084cb045ab62571a4d796f"
  },
  {
    "url": "assets/js/20.e49bcd7b.js",
    "revision": "436f98c58c5b734d3267be198952cc7a"
  },
  {
    "url": "assets/js/200.0ff14f46.js",
    "revision": "a67894df3741c5809b92decb4fa9a9d3"
  },
  {
    "url": "assets/js/201.55fb7b94.js",
    "revision": "88a57367f896407188b4c310ad4f7d9b"
  },
  {
    "url": "assets/js/202.0d048492.js",
    "revision": "be6a014fdd6ffa3d34b86f7003e9372f"
  },
  {
    "url": "assets/js/203.054d30ad.js",
    "revision": "95365a348e1209603f4ad6e9a63e7f66"
  },
  {
    "url": "assets/js/204.87b7c9f5.js",
    "revision": "382d85cadaf2964b833266c3f4189dd2"
  },
  {
    "url": "assets/js/205.c57be476.js",
    "revision": "b156b8e7d4078ac83f43e49db56713a3"
  },
  {
    "url": "assets/js/206.b7bdf782.js",
    "revision": "b5e312d922588b1d7e06357442cc56d8"
  },
  {
    "url": "assets/js/207.83471644.js",
    "revision": "0798f5a13c2fbb602e853c0fefa97fc0"
  },
  {
    "url": "assets/js/208.3c2e259a.js",
    "revision": "813a09782a62241165f6316cc47b1bb0"
  },
  {
    "url": "assets/js/209.98f6ddf5.js",
    "revision": "8f97e289e4f6262902177c90130138fd"
  },
  {
    "url": "assets/js/21.68c6894a.js",
    "revision": "d352d60163b49fb9cb4587c9e0f2411c"
  },
  {
    "url": "assets/js/210.8a46c83e.js",
    "revision": "98fdc264d9001a3b5621e831cb670868"
  },
  {
    "url": "assets/js/211.99e04b94.js",
    "revision": "f2eb45646235f9608b295aa87126129a"
  },
  {
    "url": "assets/js/212.eec54f6c.js",
    "revision": "53421d08757e8e4290eb2fbd471e93c2"
  },
  {
    "url": "assets/js/213.3b6ee99b.js",
    "revision": "d3bfaa8d8d2f3847a80c05e5e502ab01"
  },
  {
    "url": "assets/js/214.a5df3f79.js",
    "revision": "d60a2bc738f8acbe6ff248e8129dee7b"
  },
  {
    "url": "assets/js/215.fd5328b8.js",
    "revision": "d91d057bf527297ec47a7083750c59a3"
  },
  {
    "url": "assets/js/216.8d3e8a76.js",
    "revision": "918a1fdb1efa0146ded6d417811e3a9f"
  },
  {
    "url": "assets/js/217.b46605eb.js",
    "revision": "9b5afbba451e91fd3cbb1225d07b7f13"
  },
  {
    "url": "assets/js/218.5f21d45a.js",
    "revision": "1432c5758a9bc32370e229ded19b7544"
  },
  {
    "url": "assets/js/219.1fce25c1.js",
    "revision": "e89447ff89a47a04476e2dada68381c9"
  },
  {
    "url": "assets/js/22.25ac6527.js",
    "revision": "a9f7c5b4ec05167f9d67d15f5e7be223"
  },
  {
    "url": "assets/js/220.c606bc85.js",
    "revision": "12ff4e158188aac6a85791ec705dfb3a"
  },
  {
    "url": "assets/js/221.2edbde43.js",
    "revision": "deccd82d5b92c4638e804fa87514706a"
  },
  {
    "url": "assets/js/222.615b844b.js",
    "revision": "04d25b692c8b342e135e28a8dec7ecdf"
  },
  {
    "url": "assets/js/223.3ad27915.js",
    "revision": "f3375c6530064780ef6ae31e282926ba"
  },
  {
    "url": "assets/js/224.15355938.js",
    "revision": "fd86d2e0a841a50138dadc07d8a023c9"
  },
  {
    "url": "assets/js/225.2fbc506e.js",
    "revision": "b01dbf9ebb90ab54635c7d91bded2a40"
  },
  {
    "url": "assets/js/226.e4e18aba.js",
    "revision": "ed36264fb3ee5fb5b964269b58a860c3"
  },
  {
    "url": "assets/js/227.649624f6.js",
    "revision": "ac7920de313b001b86f33f5bc15e564b"
  },
  {
    "url": "assets/js/228.2af664ce.js",
    "revision": "9acb641df8278555cb99e0d3374936a0"
  },
  {
    "url": "assets/js/229.7e2be818.js",
    "revision": "86d7ca08519ce3cd235bf5c28035bf11"
  },
  {
    "url": "assets/js/23.637b6936.js",
    "revision": "3ec8afcbe98f69ca2273041d3af1d54b"
  },
  {
    "url": "assets/js/230.72d20b4a.js",
    "revision": "4f7a6b4087f7b33c04027a4d1cce14b2"
  },
  {
    "url": "assets/js/231.bd628cb0.js",
    "revision": "aa590592eacbcc0fdebb0c691e8ad9d0"
  },
  {
    "url": "assets/js/232.7583414b.js",
    "revision": "98d6e75789bb5d13b24a14d45d77f2b5"
  },
  {
    "url": "assets/js/233.0aebcb24.js",
    "revision": "a91560ec617a5b5dca41feb861ef9b9f"
  },
  {
    "url": "assets/js/234.1fd7fe5a.js",
    "revision": "61f53bc7c9fa4d3b1d174a1e1932b7af"
  },
  {
    "url": "assets/js/235.78b137b1.js",
    "revision": "f83362c1c618daa987a33cde5c17bb4d"
  },
  {
    "url": "assets/js/236.cc6edb7a.js",
    "revision": "9cffadd56e47647c2345c665a68fd627"
  },
  {
    "url": "assets/js/237.9b686ea0.js",
    "revision": "3012f16a51dcd4577fb301e04f810254"
  },
  {
    "url": "assets/js/238.b91f18eb.js",
    "revision": "db973f238840644532e5707f85738c05"
  },
  {
    "url": "assets/js/239.5cdaa6af.js",
    "revision": "fe280911eb1413b52736fae05d67aa67"
  },
  {
    "url": "assets/js/24.e8fa88a3.js",
    "revision": "7ff8a2ef7346e96e1461cafce4082eab"
  },
  {
    "url": "assets/js/240.c7838ecb.js",
    "revision": "ad5c5369e829f73ebe9762e56b01624d"
  },
  {
    "url": "assets/js/241.34eb773b.js",
    "revision": "bbbb3ac009eaccb8e332682861818167"
  },
  {
    "url": "assets/js/242.6fd69774.js",
    "revision": "20477907c11588f2523b564b0c2367e6"
  },
  {
    "url": "assets/js/243.aba5e7a6.js",
    "revision": "78f958a368f271cc12dea558f1fb31a1"
  },
  {
    "url": "assets/js/244.55dfdf8b.js",
    "revision": "e2ed755f37a8bda74705d90db355b85f"
  },
  {
    "url": "assets/js/245.bd450958.js",
    "revision": "06bd66aaf539a79c9b895ea52edfc5cd"
  },
  {
    "url": "assets/js/246.e9778f33.js",
    "revision": "3b7c5bffb9fb4365d5a56f49a38a7137"
  },
  {
    "url": "assets/js/247.cf98a7ca.js",
    "revision": "1b5ae1063cdb649e009bc11385017f4e"
  },
  {
    "url": "assets/js/248.a2cc7e94.js",
    "revision": "ab7b042013e6f0a42e8254fe97d0a468"
  },
  {
    "url": "assets/js/249.34c4e703.js",
    "revision": "aebbe8d830d908e5f994c360c0cd53fb"
  },
  {
    "url": "assets/js/25.e80cce09.js",
    "revision": "85bcde3a5d1a1e0b5e9a5eae144062d3"
  },
  {
    "url": "assets/js/250.d7b4ae0f.js",
    "revision": "6710f7de47d7e93952b875120a843e51"
  },
  {
    "url": "assets/js/251.46ecd9a6.js",
    "revision": "837384b1473f819b82902afdb6edbb2c"
  },
  {
    "url": "assets/js/252.a488ca82.js",
    "revision": "7d11b93c54150ec48772fd55dff54b86"
  },
  {
    "url": "assets/js/253.10ee41e8.js",
    "revision": "24582cc55dc1247a0036b915530493bd"
  },
  {
    "url": "assets/js/254.e216cd1a.js",
    "revision": "616712d7962225b3f889905ea0d522a5"
  },
  {
    "url": "assets/js/255.fa754190.js",
    "revision": "05ed44e81a69ffa57965120edbc744f4"
  },
  {
    "url": "assets/js/256.eff7d4d5.js",
    "revision": "a4118c09bd1ecee49a60190c8ca6ed30"
  },
  {
    "url": "assets/js/257.af657f3d.js",
    "revision": "277f194563a94b0c511b9d2631e3522e"
  },
  {
    "url": "assets/js/258.71fe409e.js",
    "revision": "4b34c3fce0616c3ded2067d3e5d4acdb"
  },
  {
    "url": "assets/js/259.df071a49.js",
    "revision": "5f603bf2a9b3527a70ebb8fefb8ac4d4"
  },
  {
    "url": "assets/js/26.13a3f4ab.js",
    "revision": "7dba172578afb0e719796c6e4c71c387"
  },
  {
    "url": "assets/js/260.e6732dac.js",
    "revision": "2c28bdd45c41d9906ec975c00f7d8375"
  },
  {
    "url": "assets/js/27.bedf02df.js",
    "revision": "6e0168c0d0688a2991b8056d07cdc244"
  },
  {
    "url": "assets/js/28.3caf603b.js",
    "revision": "91505c05338cacc9549621c91214659e"
  },
  {
    "url": "assets/js/29.989fefe8.js",
    "revision": "142cb317fb64b04930a16dc132086058"
  },
  {
    "url": "assets/js/3.a024fd7b.js",
    "revision": "da43890ab3f53fae9255c0c098ca87b9"
  },
  {
    "url": "assets/js/30.3fde9ab8.js",
    "revision": "1d4b1bc8bd2f22ed6685bdfd068c4f29"
  },
  {
    "url": "assets/js/31.789dd3b0.js",
    "revision": "12b3143d3bf7c04a72b59b7bade9a9b6"
  },
  {
    "url": "assets/js/32.330b9a62.js",
    "revision": "9b01f48bc42df158845ba024fe2de222"
  },
  {
    "url": "assets/js/33.469a867e.js",
    "revision": "6d62cab36c3f1bf4464517b75a63015f"
  },
  {
    "url": "assets/js/34.01fb30ed.js",
    "revision": "2f928c2bc15410f798c64430d355d098"
  },
  {
    "url": "assets/js/35.1cdbe575.js",
    "revision": "f60ff2fd3af830c1ab3ee536bdb0f5ff"
  },
  {
    "url": "assets/js/36.6642efb4.js",
    "revision": "612d58ce71a2a69c1bedb7b7252652b5"
  },
  {
    "url": "assets/js/37.1d1ed3e4.js",
    "revision": "7ea1914fd16ea09c869488121891fc42"
  },
  {
    "url": "assets/js/38.e7c185b9.js",
    "revision": "e728556e430baa3950c07ae36b5b7252"
  },
  {
    "url": "assets/js/39.d77f30ff.js",
    "revision": "57d3bee37a3653f10acdd8f288061978"
  },
  {
    "url": "assets/js/4.87a0d1d9.js",
    "revision": "8bac09365042d956765280fd807dff50"
  },
  {
    "url": "assets/js/40.9925b2c3.js",
    "revision": "a68346e7a17db2fc46b603bb12bba2dd"
  },
  {
    "url": "assets/js/41.35f14e9b.js",
    "revision": "02a01085fe39686511b75a129b5f288e"
  },
  {
    "url": "assets/js/42.72db0cc9.js",
    "revision": "62a0eafe0ff2102f0b2f53c718695d89"
  },
  {
    "url": "assets/js/43.2db352b1.js",
    "revision": "1271410b4c904cde98fbe96802899623"
  },
  {
    "url": "assets/js/44.b41fc0a8.js",
    "revision": "199c13fd86f88bb3f6abf741753190f5"
  },
  {
    "url": "assets/js/45.bb37f290.js",
    "revision": "8d4298a699b92917bd815d2fd3a32a87"
  },
  {
    "url": "assets/js/46.e8998be4.js",
    "revision": "5084e1de14a7a08585a540e27589eaa3"
  },
  {
    "url": "assets/js/47.0295d5ad.js",
    "revision": "dfc178020aac16c115dca070e50419d9"
  },
  {
    "url": "assets/js/48.787b8da2.js",
    "revision": "384e7bb48d37469b8c1232ba94bb5057"
  },
  {
    "url": "assets/js/49.4fe0c23d.js",
    "revision": "110b7e50b06f00e24abd3e507814b3cd"
  },
  {
    "url": "assets/js/5.b9670bd2.js",
    "revision": "1f86f27ba5817f38b109d5ad16d34e01"
  },
  {
    "url": "assets/js/50.b6dfe365.js",
    "revision": "cf5b270055667aca9f1d9ac2e2881335"
  },
  {
    "url": "assets/js/51.73bc00df.js",
    "revision": "5b54609aa683ebbab5261778ec26ccd8"
  },
  {
    "url": "assets/js/52.b876eaa5.js",
    "revision": "cf3bd31ad91c85d1200c50e78f012820"
  },
  {
    "url": "assets/js/53.4f480607.js",
    "revision": "bf5b0f74912dbcf9bdda99ce5f1dfd40"
  },
  {
    "url": "assets/js/54.133beb0c.js",
    "revision": "dd9ee48a59fbb407722791ad384e4e5d"
  },
  {
    "url": "assets/js/55.09243277.js",
    "revision": "acf79ccb022c56bedaa7899e50a27c22"
  },
  {
    "url": "assets/js/56.fb4bbd6b.js",
    "revision": "d6a6cfcd2d6e728ba00f02d502410077"
  },
  {
    "url": "assets/js/57.7f26e417.js",
    "revision": "c5e8a68ee1b67843315d7d4adea848c4"
  },
  {
    "url": "assets/js/58.3696cf33.js",
    "revision": "c992f258ef9b8c06cb8346d7cce86317"
  },
  {
    "url": "assets/js/59.df316cb2.js",
    "revision": "f5a7922fd4efe2163d2a1e0be08b5516"
  },
  {
    "url": "assets/js/6.c1c55402.js",
    "revision": "4408d826b7ea4c9346bec8b680536007"
  },
  {
    "url": "assets/js/60.90b5812b.js",
    "revision": "8402b671b1c916ad4c7eb2c8163c396b"
  },
  {
    "url": "assets/js/61.94f11f7e.js",
    "revision": "b15438c777442fcd4fbdaa253350a162"
  },
  {
    "url": "assets/js/62.f280dd3c.js",
    "revision": "20c130a3a2c9302525ca1dc89c88031d"
  },
  {
    "url": "assets/js/63.c98e5515.js",
    "revision": "02cb0b1591957c54753f3569559f79cc"
  },
  {
    "url": "assets/js/64.d4749dcd.js",
    "revision": "1a7226b26c642357283da63f79dd2dcd"
  },
  {
    "url": "assets/js/65.25c8f46b.js",
    "revision": "de535986348f2205e5e835d9b2b74cf8"
  },
  {
    "url": "assets/js/66.084eea14.js",
    "revision": "f179156da6735a2d471ca11d2b5ee770"
  },
  {
    "url": "assets/js/67.635036e5.js",
    "revision": "a7be194ed8fd5a782fe05152818a4328"
  },
  {
    "url": "assets/js/68.254dae96.js",
    "revision": "76a11c3d04f11f9cb969c9e7393448de"
  },
  {
    "url": "assets/js/69.50ac437a.js",
    "revision": "620d7ac65d44c9637678bbfbd5e2be18"
  },
  {
    "url": "assets/js/7.7125c079.js",
    "revision": "9d39e64aaa0368f3abdeed452aed9fa4"
  },
  {
    "url": "assets/js/70.e703e18a.js",
    "revision": "00f02b0b145fca021c74d00826a4d7b5"
  },
  {
    "url": "assets/js/71.af41ed79.js",
    "revision": "8626dc1aa280dcecaeb098c5126883f6"
  },
  {
    "url": "assets/js/72.8d3b32d8.js",
    "revision": "cd8e3adbc378c664f564c45169fccd88"
  },
  {
    "url": "assets/js/73.323558d0.js",
    "revision": "6733b7a66f0a2b74dfa5070035d4ac88"
  },
  {
    "url": "assets/js/74.2f0a2481.js",
    "revision": "59746ab079764e834adb892edc009f9a"
  },
  {
    "url": "assets/js/75.610ab135.js",
    "revision": "d15848ff326f49b8ed7908f18bd5249f"
  },
  {
    "url": "assets/js/76.21d799da.js",
    "revision": "2785f5d744f0c1f5b54ff4a23f3a7b44"
  },
  {
    "url": "assets/js/77.becea4a9.js",
    "revision": "cd7d5e6337c646d30a8ea797e1480098"
  },
  {
    "url": "assets/js/78.6021235a.js",
    "revision": "e3c5abed7038eb2b8102010f5e940988"
  },
  {
    "url": "assets/js/79.82caa96a.js",
    "revision": "80323a5118c366cf599d6ec6555d94cf"
  },
  {
    "url": "assets/js/8.f391b2bc.js",
    "revision": "deb126f5b785b58496903c4054ef3c3b"
  },
  {
    "url": "assets/js/80.39b5a5d0.js",
    "revision": "39654daa61b526a5afbb3c63f8331523"
  },
  {
    "url": "assets/js/81.b5e038ad.js",
    "revision": "0028e63694a14f0b457081019b79a326"
  },
  {
    "url": "assets/js/82.91fc1f69.js",
    "revision": "91a22c8ffd3b05e81a5806d07132784c"
  },
  {
    "url": "assets/js/83.bb37e7f0.js",
    "revision": "02d5ac5a348f6ce0348bb788bee982b3"
  },
  {
    "url": "assets/js/84.37b75174.js",
    "revision": "514e64ba028e42c189644d7978650a13"
  },
  {
    "url": "assets/js/85.41b2c9c1.js",
    "revision": "30cafee934fbdd431a2cc60b313cfa68"
  },
  {
    "url": "assets/js/86.522676f4.js",
    "revision": "d3e8643591fb8e22398810c6060ab045"
  },
  {
    "url": "assets/js/87.621b2fa4.js",
    "revision": "df837ff4f38f229858c16acbbd567288"
  },
  {
    "url": "assets/js/88.4fcd9c85.js",
    "revision": "780ac87c3402fff9fdeb279a171120eb"
  },
  {
    "url": "assets/js/89.3eb70514.js",
    "revision": "1fe76a0f4e3f8184678199aa9818c26c"
  },
  {
    "url": "assets/js/9.8ee82c62.js",
    "revision": "095f7164214c6de12e4ee5d254b99bd2"
  },
  {
    "url": "assets/js/90.535eb17f.js",
    "revision": "dcc7e5a2a05b1565ec3dd23e1d6c2a20"
  },
  {
    "url": "assets/js/91.317c8717.js",
    "revision": "3b79fb5d71440906cf123e1c968e22f9"
  },
  {
    "url": "assets/js/92.a7b740d3.js",
    "revision": "e602d5e70d8383271ba9201393dce43b"
  },
  {
    "url": "assets/js/93.4740823e.js",
    "revision": "abf3c7927e23d0d561091d8dab278e14"
  },
  {
    "url": "assets/js/94.0b95b675.js",
    "revision": "e5e68a3951be68d0cebe69c7cd675dec"
  },
  {
    "url": "assets/js/95.186410ec.js",
    "revision": "e094fa3a21bea7d30106f3bc69a57c24"
  },
  {
    "url": "assets/js/96.5e00c9d4.js",
    "revision": "6fa77193e370c2205dd3ff3bd00e7680"
  },
  {
    "url": "assets/js/97.26e2105a.js",
    "revision": "8dc736c20b793e40e631a325a693117b"
  },
  {
    "url": "assets/js/98.261c5a1b.js",
    "revision": "804e6b87c3e1f1eea176e5b3a243f9f4"
  },
  {
    "url": "assets/js/99.8d824d01.js",
    "revision": "536454c6d80e25a2b9657804e3c61838"
  },
  {
    "url": "assets/js/app.1877af5b.js",
    "revision": "6a5480151f4162006d7eacbb9a39e952"
  },
  {
    "url": "blog/article/read.html",
    "revision": "5d4647edcc545462cb5238c5572ae2e8"
  },
  {
    "url": "blog/article/年度总结/2019年度总结.html",
    "revision": "faf57ff6df94874ea9156cfe57973d2b"
  },
  {
    "url": "blog/article/纪念意义/BATFighting.html",
    "revision": "ef3676210f8e208a6e592ccb8eed5f34"
  },
  {
    "url": "blog/article/纪念意义/秋招总结.html",
    "revision": "8d3de7ddccfc2a530c1f73b8efb65b9f"
  },
  {
    "url": "blog/article/纪念意义/第二个目标.html",
    "revision": "e9c6b0daa189892411fd0a51ba417218"
  },
  {
    "url": "blog/article/闲情随记/five-years-plan.html",
    "revision": "3adde915025fef0964b2be2ef9e3cb02"
  },
  {
    "url": "blog/article/闲情随记/人是怎么废掉的.html",
    "revision": "ee538412b760316a8c7416c31d6b0821"
  },
  {
    "url": "blog/article/闲情随记/十年学会编程.html",
    "revision": "2d88a7a1bfeb3b4c64be8c139cc9738c"
  },
  {
    "url": "blog/article/闲情随记/程序员让自己变得可替代.html",
    "revision": "123e3cd4919fc8711a1f432b9499163f"
  },
  {
    "url": "blog/command/read.html",
    "revision": "93ed230a64a9568907cf9eeb984c60bd"
  },
  {
    "url": "blog/command/命令语言类/git.html",
    "revision": "466d57b5f79d67dbb0f99135c1a27091"
  },
  {
    "url": "blog/command/命令语言类/linux.html",
    "revision": "9d9a651390f103e80a111ee4903ee7cf"
  },
  {
    "url": "blog/command/命令语言类/markdown.html",
    "revision": "b11a4df683f009698021b169e645fb1a"
  },
  {
    "url": "blog/command/命令语言类/vim.html",
    "revision": "086967bdac67af19968680cc59f383dc"
  },
  {
    "url": "blog/command/软件快捷键类/Alfred4.html",
    "revision": "0d1b182e47ea7d2097b4d864bcc28cf5"
  },
  {
    "url": "blog/command/软件快捷键类/iterm2.html",
    "revision": "5b2f72657655ee951f0044724f98b88c"
  },
  {
    "url": "blog/command/软件快捷键类/Mac.html",
    "revision": "3876818c44be6d712b4d93d7c985450d"
  },
  {
    "url": "blog/command/软件快捷键类/Tmux.html",
    "revision": "a40f4a9f5aa5e4c55cdce87b048ae4df"
  },
  {
    "url": "blog/command/软件快捷键类/vscode.html",
    "revision": "14b2b29fac4641bf667627a8b0a901de"
  },
  {
    "url": "blog/other/read.html",
    "revision": "921b27ac187d230086c30a34bd017759"
  },
  {
    "url": "blog/other/代码产出.html",
    "revision": "cc986863be893fc26f3ad8ec699daff9"
  },
  {
    "url": "blog/software/Chrome插件.html",
    "revision": "d1badf60143ab52cfb3de79559962a80"
  },
  {
    "url": "blog/software/Mac必备应用.html",
    "revision": "5feccee1ae9937ac69c891100343c768"
  },
  {
    "url": "blog/software/Node插件.html",
    "revision": "3a0e7c6e185a02771b395f12b0ad287e"
  },
  {
    "url": "blog/software/read.html",
    "revision": "c62987a706aae4ed5b893626cac38ca2"
  },
  {
    "url": "blog/software/Vscode必备插件.html",
    "revision": "ce9e15e4b6eeac9a222cff81ceda5174"
  },
  {
    "url": "blog/software/Webpack插件.html",
    "revision": "2eafa0b6bfd1a310fcf630605da7448d"
  },
  {
    "url": "blog/tools/git修改作者.html",
    "revision": "6bd12737c3538439c34e3cf56fa302fb"
  },
  {
    "url": "blog/tools/git连接多仓库.html",
    "revision": "1c78be0196cbd12a836135a312efbbc7"
  },
  {
    "url": "blog/tools/PicGo配合Github图床.html",
    "revision": "cae61a3a03b31daf13a391304fa64dab"
  },
  {
    "url": "blog/tools/read.html",
    "revision": "9104f8c6fa9a674f600ecda57b5b3973"
  },
  {
    "url": "blog/tools/win10激活.html",
    "revision": "3f83cf96bb834e04047f7f58c3cd9b7f"
  },
  {
    "url": "blog/tools/移动端调试.html",
    "revision": "9d3b268de747f5ce2da82ab6430c064f"
  },
  {
    "url": "code/lodash/array/chunk.html",
    "revision": "893dc9e284916b63d79dc7c9e4764908"
  },
  {
    "url": "code/lodash/array/compact.html",
    "revision": "0aa7ff291e7f1c1b1405ce0a13c379b9"
  },
  {
    "url": "code/lodash/array/concat.html",
    "revision": "4fbd2d04ed6c487b793bf54e786b2718"
  },
  {
    "url": "code/lodash/array/difference.html",
    "revision": "50528300484aabf9251e8970ef14f9a9"
  },
  {
    "url": "code/lodash/array/read.html",
    "revision": "beb940a0e04720cd8400e5f58cfd7076"
  },
  {
    "url": "code/lodash/collection.html",
    "revision": "f648094c4356c55a5216d26cb3f79ddb"
  },
  {
    "url": "code/lodash/date.html",
    "revision": "86a84fb5c1a65ccdb4bdc223fc0b708d"
  },
  {
    "url": "code/lodash/function.html",
    "revision": "0231d530383e92970d70ff1852c29285"
  },
  {
    "url": "code/lodash/lang.html",
    "revision": "f05108083930a914d30c878752dc9213"
  },
  {
    "url": "code/lodash/math.html",
    "revision": "d86a5dce7e5c4f53d97464290be96560"
  },
  {
    "url": "code/lodash/methods.html",
    "revision": "5c79eab02731f5a7b39a1f2997fe5e0a"
  },
  {
    "url": "code/lodash/number.html",
    "revision": "c997678c9076e75f30c89ce14eafcabe"
  },
  {
    "url": "code/lodash/object.html",
    "revision": "d20114deab55474d3f5e6a90dd0c5a86"
  },
  {
    "url": "code/lodash/properties.html",
    "revision": "9010f4f9948ec211bb9a78adec852368"
  },
  {
    "url": "code/lodash/read.html",
    "revision": "78d35023e510e7c9e3ecbf8487f9aa4d"
  },
  {
    "url": "code/lodash/seq.html",
    "revision": "1bae225f63bc14f30bf148b069032a23"
  },
  {
    "url": "code/lodash/string.html",
    "revision": "1208bd352417b031114a15a3e1516796"
  },
  {
    "url": "code/lodash/util.html",
    "revision": "f3caf6a673b286f602ac5af791b3d00c"
  },
  {
    "url": "code/webpack/read.html",
    "revision": "b83203c3363fa59f7388c6410e19b18e"
  },
  {
    "url": "code/webpack/tapable.html",
    "revision": "627bdd4f7c2587a863861145f2a4a437"
  },
  {
    "url": "code/zepto/read.html",
    "revision": "1b397db20f6d638ba42b0f1b0d19c518"
  },
  {
    "url": "code/zepto/structure.html",
    "revision": "203a0635bea8518c434ba7bdcfe2e603"
  },
  {
    "url": "hero.png",
    "revision": "b3abf40d3cf4c7045ae9a82b0553c625"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "8de725abd0250f0fd2ec16665bd8e3c0"
  },
  {
    "url": "knowledge/algorithm/read.html",
    "revision": "0acbda6f1ded71c96d64608a203cc292"
  },
  {
    "url": "knowledge/algorithm/冒泡排序.html",
    "revision": "f1fd5cb0406609014d0f958e71c23c1f"
  },
  {
    "url": "knowledge/algorithm/堆排序.html",
    "revision": "d39af1b4ddc556ce933c519de3793bda"
  },
  {
    "url": "knowledge/algorithm/复杂度.html",
    "revision": "8a85876977599d4cf7b15acc42129455"
  },
  {
    "url": "knowledge/algorithm/归并排序.html",
    "revision": "c860ac1b385339b1f88339530ea24158"
  },
  {
    "url": "knowledge/algorithm/快速排序.html",
    "revision": "dbce53840a911570243cba3947edefed"
  },
  {
    "url": "knowledge/algorithm/排序概览.html",
    "revision": "f252a5a2fab6b507267323747bea07f2"
  },
  {
    "url": "knowledge/algorithm/插入排序.html",
    "revision": "db4d09e9e7a92ad1a313bf1e6bd53c48"
  },
  {
    "url": "knowledge/algorithm/数组逆序对.html",
    "revision": "2dd5f2bb1068f46aeb39324c5acabc21"
  },
  {
    "url": "knowledge/algorithm/选择排序.html",
    "revision": "c16ca73e8e86d537578bc29da3046b31"
  },
  {
    "url": "knowledge/architecture/read.html",
    "revision": "5d3c18ba15254f7b75b4fc361a51d9e0"
  },
  {
    "url": "knowledge/backend/php.html",
    "revision": "450bd76a53d8d25657db6e0e9fdce665"
  },
  {
    "url": "knowledge/backend/read.html",
    "revision": "2721876b8fdf383fe5331308ad2e04d1"
  },
  {
    "url": "knowledge/config/c.html",
    "revision": "bf0116c2e4725a3c2c935192446a6206"
  },
  {
    "url": "knowledge/config/eslint.html",
    "revision": "ffc85f81b67bdfec3f8acabe330b4d98"
  },
  {
    "url": "knowledge/config/mysql.html",
    "revision": "ebefc70a7842212df96f205160380f30"
  },
  {
    "url": "knowledge/config/php.html",
    "revision": "d05edc6c956981688adb78782f9dfe25"
  },
  {
    "url": "knowledge/config/read.html",
    "revision": "4f9920da4422696a10baa7846c19b94e"
  },
  {
    "url": "knowledge/database/mysql/MySQL介绍.html",
    "revision": "c84c247095b219305a47e1667cbda29b"
  },
  {
    "url": "knowledge/database/mysql/MySQL开发规范.html",
    "revision": "ae4f5c56fe7d9d29096238bac66453f5"
  },
  {
    "url": "knowledge/database/read.html",
    "revision": "38d8956fd6e57afc95a0af5d12aed5e6"
  },
  {
    "url": "knowledge/database/常用的SQL语句.html",
    "revision": "37dfcdefcd3d8730690c06411fb958da"
  },
  {
    "url": "knowledge/design/read.html",
    "revision": "f0472ef67511e212613ad17e3f065787"
  },
  {
    "url": "knowledge/design/创建型模式/原型模式.html",
    "revision": "f4d39d4b75c18af38caf458f6a5f5d96"
  },
  {
    "url": "knowledge/design/创建型模式/工厂方法模式.html",
    "revision": "7792ded6b58ad6d4198a070b59fea9b9"
  },
  {
    "url": "knowledge/design/创建型模式/简单工厂模式.html",
    "revision": "a4900cc8b829ee7d0612b9f31e17e9df"
  },
  {
    "url": "knowledge/design/基础原则/solid.html",
    "revision": "490d4904e12b84c959d3bdfe3689b8b4"
  },
  {
    "url": "knowledge/design/基础原则/迪米特法则.html",
    "revision": "93dadbcf6ac522cbc851bd554edb4d51"
  },
  {
    "url": "knowledge/design/结构型模式/代理模式.html",
    "revision": "e9181970a0404d8f6e5b5e5fb2227831"
  },
  {
    "url": "knowledge/design/结构型模式/外观模式.html",
    "revision": "ce4fcede46c95d79f86baead9ca63a1b"
  },
  {
    "url": "knowledge/design/结构型模式/装饰者模式.html",
    "revision": "f3510a8f8238d4f875ccf82b2bf00d72"
  },
  {
    "url": "knowledge/design/行为型模式/模板方法模式.html",
    "revision": "f379375da2d1233743844e83d3b0d8c9"
  },
  {
    "url": "knowledge/design/行为型模式/策略模式.html",
    "revision": "900e2d4cf7342be89a72787f20210d3a"
  },
  {
    "url": "knowledge/english/read.html",
    "revision": "6cb67744eaa36eb86146909dc0fe3d12"
  },
  {
    "url": "knowledge/english/英语语法新思维初级.html",
    "revision": "33b2c3ba50cec6b1068e59a967e9b260"
  },
  {
    "url": "knowledge/hard/read.html",
    "revision": "afb0fabce584e25fd7e78c6d407d4ca8"
  },
  {
    "url": "knowledge/mindmap/read.html",
    "revision": "eb39adf079d86a85c48f432f2c78afd5"
  },
  {
    "url": "knowledge/mindmap/前端基础与底层原理.html",
    "revision": "20b91f98b217e0fa2f8df4fd15374718"
  },
  {
    "url": "knowledge/mindmap/如何阅读一本英文书.html",
    "revision": "2a1370dcd719b531f1f897bd279906de"
  },
  {
    "url": "knowledge/mindmap/学习和阅读源码.html",
    "revision": "c1473528f2c212f60268870c1b817786"
  },
  {
    "url": "knowledge/mindmap/异步IO与Lock_Free.html",
    "revision": "a4184e279e3a18a916e7233215580a23"
  },
  {
    "url": "knowledge/mindmap/正式入门.html",
    "revision": "96ee60498096242d47b82145b48b9ee4"
  },
  {
    "url": "knowledge/mindmap/深度归纳和坚持实践.html",
    "revision": "bc3ab969b18dfb68f6810dd7c9d022cd"
  },
  {
    "url": "knowledge/mindmap/源头原理和知识地图.html",
    "revision": "a403714023dbe4716017d3dc831a7702"
  },
  {
    "url": "knowledge/mindmap/理论学科.html",
    "revision": "d4628f2d24360fad2de778b81a0a37f8"
  },
  {
    "url": "knowledge/mindmap/程序员练级攻略入门.html",
    "revision": "a0ac34fa8b4cfd0f35c6521a22835e4d"
  },
  {
    "url": "knowledge/mindmap/程序员练级攻略开篇.html",
    "revision": "1f2626c434a7151d88bf90f158369e8e"
  },
  {
    "url": "knowledge/mindmap/程序员练级攻略进阶.html",
    "revision": "2fa1536f04412a95d33751c0a105746c"
  },
  {
    "url": "knowledge/mindmap/端正学习态度.html",
    "revision": "d788764a126d29ff440e6de9dabf77d7"
  },
  {
    "url": "knowledge/mindmap/系统底层.html",
    "revision": "fdaccc01767f63c99ac38915525b56d2"
  },
  {
    "url": "knowledge/mindmap/系统知识.html",
    "revision": "8ff6afe0948a9acc4333f63a790a03e5"
  },
  {
    "url": "knowledge/mindmap/编程素养.html",
    "revision": "f33078b9b37af1b21f0e5dd5ddc41bc1"
  },
  {
    "url": "knowledge/mindmap/编程语言.html",
    "revision": "0e54bf863248bce9fbbc8b7d248e19be"
  },
  {
    "url": "knowledge/mindmap/自我管理.html",
    "revision": "40e0d2629066b88562ab6d37a906403e"
  },
  {
    "url": "knowledge/mindmap/软件设计.html",
    "revision": "08842fdd36e3d2ec902ccc265c244966"
  },
  {
    "url": "knowledge/mindmap/零基础启蒙.html",
    "revision": "7318a582675ffedd85d34d53c097d805"
  },
  {
    "url": "knowledge/mindmap/面对枯燥和量大的知识.html",
    "revision": "6acece2d20df662ce13dc87f879fb19e"
  },
  {
    "url": "knowledge/mindmap/高效学习.html",
    "revision": "e6f7558ec2faafb2bbbff7d2454c086a"
  },
  {
    "url": "knowledge/network/read.html",
    "revision": "8b7135501ce4addc0a23666f929396d4"
  },
  {
    "url": "knowledge/structure/read.html",
    "revision": "167c4cdddd8825260042a299b34d6b82"
  },
  {
    "url": "knowledge/structure/算法.html",
    "revision": "4bf0f7f4d26db15cb1b033298cc65cc6"
  },
  {
    "url": "knowledge/structure/线性表.html",
    "revision": "28e785bcb9f7a416252244a362235dbb"
  },
  {
    "url": "knowledge/system/read.html",
    "revision": "4fef17abf289b61808701b1eeb42e316"
  },
  {
    "url": "knowledge/web/css/read.html",
    "revision": "40c4e6749ec070b11487a9729d21426a"
  },
  {
    "url": "knowledge/web/html/read.html",
    "revision": "e7498746471ceb52bd90a9cd120ae4c3"
  },
  {
    "url": "knowledge/web/html/交叉观察者.html",
    "revision": "e6cabe1fa5f7559c678c9eb55f505b1a"
  },
  {
    "url": "knowledge/web/html/滚动条.html",
    "revision": "fb350790fa537e67c47f51006ee0a4c4"
  },
  {
    "url": "knowledge/web/javascript/read.html",
    "revision": "b88687943c4a69bad4a419951d5ac248"
  },
  {
    "url": "knowledge/web/javascript/函数柯里化.html",
    "revision": "a00af70f9b710fe474cc9dcd33851304"
  },
  {
    "url": "knowledge/web/javascript/正则表达式/read.html",
    "revision": "9c0c73a2a4ef45249b8028c7a278f172"
  },
  {
    "url": "knowledge/web/javascript/正则表达式/位置匹配攻略.html",
    "revision": "eb09bb4b214eef160aa039b0819d5373"
  },
  {
    "url": "knowledge/web/javascript/正则表达式/回溯法原理.html",
    "revision": "8de5001fb93f5fb58f02d1e3dc627bcc"
  },
  {
    "url": "knowledge/web/javascript/正则表达式/字符匹配攻略.html",
    "revision": "96d35b40c4788c88455057c2e18a288c"
  },
  {
    "url": "knowledge/web/javascript/正则表达式/括号的作用.html",
    "revision": "5a0ab509442723fa478a543a1bd9f66b"
  },
  {
    "url": "knowledge/web/javascript/正则表达式/正则表达式的拆分.html",
    "revision": "aa130ab35c89e7ce2481a13a5d4713e4"
  },
  {
    "url": "knowledge/web/javascript/正则表达式/正则表达式的构建.html",
    "revision": "8acf91d9d5f7fb4062bac3b0dcc3c4e9"
  },
  {
    "url": "knowledge/web/javascript/正则表达式/正则表达式编程.html",
    "revision": "29a32bbfbdd97b47bb1dd6097b7a91ec"
  },
  {
    "url": "knowledge/web/javascript/正则表达式/速查表.html",
    "revision": "affa72f09eb69bb40efe3f5b7ae15a9e"
  },
  {
    "url": "knowledge/web/react/ReactHooks.html",
    "revision": "b0c54e1674574fdc63c3b092839b0d8d"
  },
  {
    "url": "knowledge/web/react/read.html",
    "revision": "46363ab8b61b0d3389d648a4caa7c0db"
  },
  {
    "url": "knowledge/web/react/从零实现Redux/中间件middleware.html",
    "revision": "887de830e2f280fd163173a8757e3655"
  },
  {
    "url": "knowledge/web/react/从零实现Redux/最佳实践.html",
    "revision": "ed3cc5f74b3a373ba0e20cbe4a8b481a"
  },
  {
    "url": "knowledge/web/react/从零实现Redux/前言.html",
    "revision": "9e6deaf46df520114c6d2e6e1ba2aa0a"
  },
  {
    "url": "knowledge/web/react/从零实现Redux/多文件协作.html",
    "revision": "e9d32b3a83c4b42f4e3c8e94940a9de2"
  },
  {
    "url": "knowledge/web/react/从零实现Redux/完整的redux.html",
    "revision": "d7428fe7a7a59422a3d047c3f47de4f5"
  },
  {
    "url": "knowledge/web/react/从零实现Redux/总结.html",
    "revision": "1a6ba98e63e7d79773b01c15ae82683f"
  },
  {
    "url": "knowledge/web/react/从零实现Redux/状态管理器.html",
    "revision": "096d571c34c75f801a652c947cfe9b8b"
  },
  {
    "url": "knowledge/web/react/从零构建React/函数组件.html",
    "revision": "bd4d4b9e998f92c671a1e5cdc17f88b9"
  },
  {
    "url": "knowledge/web/react/从零构建React/前言.html",
    "revision": "eb305d6c47535881a2ab19226179dada"
  },
  {
    "url": "knowledge/web/react/从零构建React/回顾React.html",
    "revision": "f5c09aa64247d362ad23ca5ba906ca02"
  },
  {
    "url": "knowledge/web/react/从零构建React/实现createElement.html",
    "revision": "29a63a84b28e7f2839b22a9fee5de0ac"
  },
  {
    "url": "knowledge/web/react/完全理解高阶组件.html",
    "revision": "67fad1d75e4c76d120f989773f926da2"
  },
  {
    "url": "knowledge/web/react/编码规范.html",
    "revision": "17feb9766ef0a429ee8d3ad780cfbecf"
  },
  {
    "url": "knowledge/web/read.html",
    "revision": "1cd85904117101094e5926ca10276711"
  },
  {
    "url": "knowledge/web/typescript/read.html",
    "revision": "27338892e44bf461f3e7f4d47838acc2"
  },
  {
    "url": "knowledge/web/vue/devtool.html",
    "revision": "db375ff7d4dd98328ff93ec58b294209"
  },
  {
    "url": "knowledge/web/vue/read.html",
    "revision": "0b3b5b478e235cb11e988cebfd286591"
  },
  {
    "url": "knowledge/web/vue/编码规范.html",
    "revision": "7e7415d3a63b646732dccdfa75b8b576"
  },
  {
    "url": "knowledge/web/webpack/read.html",
    "revision": "f63d19446af1bdfd0b3e1a8361d7e50c"
  },
  {
    "url": "logo.png",
    "revision": "b3abf40d3cf4c7045ae9a82b0553c625"
  },
  {
    "url": "notebook/algorithm/read.html",
    "revision": "dbb4d897a0ad9cfea94037ebabc7f4f4"
  },
  {
    "url": "notebook/algorithm/shuffle.html",
    "revision": "62932ac8dcfdb26b19883f5046b47759"
  },
  {
    "url": "notebook/cssTricks/behavior.html",
    "revision": "4816108e7ab0ba1f0df93299263bafd4"
  },
  {
    "url": "notebook/cssTricks/color.html",
    "revision": "406142382989d71478d9b8adccbd671f"
  },
  {
    "url": "notebook/cssTricks/component.html",
    "revision": "0ff12eb34a72ec8d4660d0c30fdbc596"
  },
  {
    "url": "notebook/cssTricks/figure.html",
    "revision": "709c267052c6d59cf201a5e8b2ace4fa"
  },
  {
    "url": "notebook/cssTricks/layout.html",
    "revision": "a87a990a6ffdb2e05c04f6a3b370cb49"
  },
  {
    "url": "notebook/cssTricks/read.html",
    "revision": "cb6bf48f810269aa91af80e203d86945"
  },
  {
    "url": "notebook/difters/read.html",
    "revision": "9579fb21d696cd16560ed6f9e6cb584a"
  },
  {
    "url": "notebook/difters/扬帆起航.html",
    "revision": "c120fbc4e52731ebb5511c426f3ed8bc"
  },
  {
    "url": "notebook/difters/第一章.html",
    "revision": "ff6402d6754236b944dfc49a4cc55edc"
  },
  {
    "url": "notebook/jsTricks/array.html",
    "revision": "e8ddb6abf9044620f2d160371189a722"
  },
  {
    "url": "notebook/jsTricks/boolean.html",
    "revision": "15000652ef06232018c3a02ffe6fd639"
  },
  {
    "url": "notebook/jsTricks/code.html",
    "revision": "e5ed2a8125b0142294cf6fef024598ca"
  },
  {
    "url": "notebook/jsTricks/dom.html",
    "revision": "d17e12d68459c66e3719657ff92abb46"
  },
  {
    "url": "notebook/jsTricks/function.html",
    "revision": "41799c6579deb359ba07d05ff6a19594"
  },
  {
    "url": "notebook/jsTricks/number.html",
    "revision": "b453149d6c092ee9ca114df24ac0f62b"
  },
  {
    "url": "notebook/jsTricks/object.html",
    "revision": "8bf68133add0cc854ee09834cb72070b"
  },
  {
    "url": "notebook/jsTricks/read.html",
    "revision": "d158859cb86bf1eb84b99642fd88badc"
  },
  {
    "url": "notebook/jsTricks/string.html",
    "revision": "942cc3c2b1eee0723e6a9a2b2fb57086"
  },
  {
    "url": "notebook/jsTricks/正则表达式.html",
    "revision": "12a208a5f65a4a7163810d6dfb8645bb"
  },
  {
    "url": "notebook/school/css.html",
    "revision": "bd4d3ca319010c2900b2b120592af220"
  },
  {
    "url": "notebook/school/database.html",
    "revision": "74eb50ac289962061b56d319d0d779a3"
  },
  {
    "url": "notebook/school/freamwork.html",
    "revision": "0d62586ad2ce44525163844c4b5d6bea"
  },
  {
    "url": "notebook/school/html.html",
    "revision": "13f7e57798380b60e0f0b102c3870f1a"
  },
  {
    "url": "notebook/school/javascript.html",
    "revision": "63c7e15eaf8db882a8972d9105736898"
  },
  {
    "url": "notebook/school/module.html",
    "revision": "d53091b8c4af306af106045a1e5e443d"
  },
  {
    "url": "notebook/school/network.html",
    "revision": "827ed6d02a4e21828aafe03c08ee960f"
  },
  {
    "url": "notebook/school/nodejs.html",
    "revision": "090e0e3e1dfcbf10f2ea31c78c7b213b"
  },
  {
    "url": "notebook/school/otherknowlage.html",
    "revision": "e1223a3b82d2fa96b7ec8c7dc072768b"
  },
  {
    "url": "notebook/school/othertools.html",
    "revision": "b52dab34fbf3836f453c24a7d665d5ad"
  },
  {
    "url": "notebook/school/read.html",
    "revision": "97b78b8f65c9f9bf53b791b47608c3cb"
  },
  {
    "url": "notebook/school/structure.html",
    "revision": "044a9860331072a198738aef6b343f8e"
  },
  {
    "url": "readbook/literature/read.html",
    "revision": "e6b24bf49a1644ff0cc8659b6c90d9ba"
  },
  {
    "url": "readbook/literature/亮剑.html",
    "revision": "43e55e1b0dcf2a6a6e992102ac786bac"
  },
  {
    "url": "readbook/literature/呼兰河传.html",
    "revision": "125b22958c272fd4e2eb07b92fa60dd4"
  },
  {
    "url": "readbook/literature/小窗幽记.html",
    "revision": "3e712b563bca4f2432eba6c092e9eeb6"
  },
  {
    "url": "readbook/literature/平凡的世界.html",
    "revision": "41c2c5e5362ac87d94d23aa6f310951d"
  },
  {
    "url": "readbook/literature/肖申克的救赎.html",
    "revision": "82eaf96bf8ece833c51c60252ba5e95b"
  },
  {
    "url": "readbook/other/read.html",
    "revision": "67e0b8b01acc3d6d0d7c6d4fb14a0a2c"
  },
  {
    "url": "readbook/other/你的灯亮着吗.html",
    "revision": "018ccc32166f646ff0d3d594f35265c0"
  },
  {
    "url": "readbook/other/微软的梦工厂.html",
    "revision": "abe6d4a13f5b2b228f3e99c6f29a067f"
  },
  {
    "url": "readbook/other/言叶之庭.html",
    "revision": "969741d41aebdfd7f49af64d2648486a"
  },
  {
    "url": "readbook/poetry/read.html",
    "revision": "09911407ce88b93b565fa8e0a2e502eb"
  },
  {
    "url": "readbook/poetry/唐寅.html",
    "revision": "a0148579434b53607f50c4409e02fb9f"
  },
  {
    "url": "readbook/poetry/唐珙.html",
    "revision": "74a64bba386278b1144a6dd747bd1894"
  },
  {
    "url": "readbook/poetry/宋祁.html",
    "revision": "2dd1ad5c944ca32f0f1ad362a1d9c83c"
  },
  {
    "url": "readbook/poetry/崔护.html",
    "revision": "5e30a47b18a3625df2578a6148537ff3"
  },
  {
    "url": "readbook/poetry/张旭.html",
    "revision": "fb0e6565cc7c56fbb26ddb1885b66b31"
  },
  {
    "url": "readbook/poetry/晏几道.html",
    "revision": "7997242dd10841e338b49e8cd6615c55"
  },
  {
    "url": "readbook/poetry/朱淑真.html",
    "revision": "734076b5697087695475aab08c8cdb69"
  },
  {
    "url": "readbook/poetry/李商隐.html",
    "revision": "ce313647d7884f0bee35165c730105ee"
  },
  {
    "url": "readbook/poetry/李清照.html",
    "revision": "247713385ad6751e3342e66a8629dcf2"
  },
  {
    "url": "readbook/poetry/李白.html",
    "revision": "3c565caf71191c66dd5e6e96bfc39594"
  },
  {
    "url": "readbook/poetry/杜牧.html",
    "revision": "d895052c888aebc20d3635fc4b0605a9"
  },
  {
    "url": "readbook/poetry/杨万里.html",
    "revision": "db5cf9cc891b12f4d9e18d98a440b5ae"
  },
  {
    "url": "readbook/poetry/汪遵.html",
    "revision": "e59885cf5bd0cb53b551c265ac838658"
  },
  {
    "url": "readbook/poetry/白居易.html",
    "revision": "7b7ee140e04079f47868671e74ec6a10"
  },
  {
    "url": "readbook/poetry/白玉蟾.html",
    "revision": "001f30632b37e456d6e7ce60fb727ecb"
  },
  {
    "url": "readbook/poetry/石涛.html",
    "revision": "15229553fc648d09a8bad46be190b3aa"
  },
  {
    "url": "readbook/poetry/秦观.html",
    "revision": "6ea58a4b75320421669a7577817bd581"
  },
  {
    "url": "readbook/poetry/纳兰性德.html",
    "revision": "db9966fdcabb53394d5f08e7ea16d442"
  },
  {
    "url": "readbook/poetry/苏曼殊.html",
    "revision": "852073481dabc07a4750751caaf3b464"
  },
  {
    "url": "readbook/poetry/苏轼.html",
    "revision": "8cb174b46af568372787959587a70ebd"
  },
  {
    "url": "readbook/poetry/蒋捷.html",
    "revision": "09186368592a9c14b86b054e6cd3138b"
  },
  {
    "url": "readbook/poetry/陆龟蒙.html",
    "revision": "e3498a1ac4b30ae7a22c48badcaead4d"
  },
  {
    "url": "readbook/poetry/陈陶.html",
    "revision": "b2b7bb6e891768da85e93867819b3e84"
  },
  {
    "url": "readbook/poetry/韦庄.html",
    "revision": "a1fe67e857ceaf6506cc1f9dcd088764"
  },
  {
    "url": "readbook/technology/201principlesofsoftwaredevelopment.html",
    "revision": "6551d5dc709063ee0dfbacf66820937e"
  },
  {
    "url": "readbook/technology/CPrimerPlus.html",
    "revision": "776cca8bcb260ece94da71ecbc1ad6cb"
  },
  {
    "url": "readbook/technology/css世界.html",
    "revision": "bf393aeb607d542ec6f3c1e1a69b8ee5"
  },
  {
    "url": "readbook/technology/CSS揭秘.html",
    "revision": "41d9f19bbfbf3fe36855ec6050d15d87"
  },
  {
    "url": "readbook/technology/css禅意花园.html",
    "revision": "9b5f99b9f23f6dbeeb3094518ff590f6"
  },
  {
    "url": "readbook/technology/javascript函数式编程.html",
    "revision": "187829ddb7579f27a7bb53ff616d348e"
  },
  {
    "url": "readbook/technology/javascript忍者秘籍.html",
    "revision": "183fa43827de439b15e4ea1ca1b27fc8"
  },
  {
    "url": "readbook/technology/javascript语言精粹.html",
    "revision": "c7e25c401cd9b78c50aa3d683424fc9a"
  },
  {
    "url": "readbook/technology/javascript高级程序设计.html",
    "revision": "a794a40647650a817c47f4d69c63201c"
  },
  {
    "url": "readbook/technology/js权威指南.html",
    "revision": "df36a9fab986e680eea4fbd9cd091a30"
  },
  {
    "url": "readbook/technology/MySQL必知必会.html",
    "revision": "f4abb1265bd69885fe8017db74df82c2"
  },
  {
    "url": "readbook/technology/NodeJs来一打C加加扩展.html",
    "revision": "2e54806cd714a745cffa34a5ac32032b"
  },
  {
    "url": "readbook/technology/Node即学即用.html",
    "revision": "9e3b2f50c7493505cebc0a7ec34c111e"
  },
  {
    "url": "readbook/technology/PHP核心技术与最佳实践.html",
    "revision": "b165f458ab9b0413a1183ee132b6d363"
  },
  {
    "url": "readbook/technology/read.html",
    "revision": "c2f3a759757a851f69dde7e35c61c178"
  },
  {
    "url": "readbook/technology/vuejs实战.html",
    "revision": "23bc411f2c01026437959f176ef1a45a"
  },
  {
    "url": "readbook/technology/代码大全.html",
    "revision": "2bb0dccbe044d1931128d7715e728e2e"
  },
  {
    "url": "readbook/technology/代码整洁之道.html",
    "revision": "c6a7b49f0617a7820878b403f7e28862"
  },
  {
    "url": "readbook/technology/你不知道的javascript.html",
    "revision": "06fccefc8172fcfc6a6be80b6d57ff16"
  },
  {
    "url": "readbook/technology/剑指offer.html",
    "revision": "6197d420b81b2e578ed1bd4038eae99b"
  },
  {
    "url": "readbook/technology/图解http.html",
    "revision": "90a24c39e5cb7afb6db145803096d8c1"
  },
  {
    "url": "readbook/technology/数据结构与算法分析C语言描述.html",
    "revision": "fe08fac51a4df270526a4373074e9553"
  },
  {
    "url": "readbook/technology/深入浅出NodeJs.html",
    "revision": "f7aab49426edd06402af6c6f1983549f"
  },
  {
    "url": "readbook/technology/深入浅出Webpack.html",
    "revision": "7334e33cf3fa34a912ef0cc9741f0082"
  },
  {
    "url": "readbook/technology/疯狂Java讲义.html",
    "revision": "665aba4373e952098aae80f2f8e6c1da"
  },
  {
    "url": "readbook/technology/算法导论.html",
    "revision": "f2908719897b45674cd24733a5cad28e"
  },
  {
    "url": "readbook/technology/编写可读写代码的艺术.html",
    "revision": "7e133950a5b154d00c4a71bc983af337"
  },
  {
    "url": "readbook/technology/编码隐匿在计算机硬件背后的语言.html",
    "revision": "72317f19f0288ee1fc8382f4da5d5b7f"
  },
  {
    "url": "readbook/technology/锋利的jquery.html",
    "revision": "3b6963d5409c40ecb711f88011765360"
  },
  {
    "url": "readbook/technology/高性能MySQL.html",
    "revision": "5d8173b03f72862550d3035f62ebb775"
  },
  {
    "url": "readbook/technology/高性能的javascript.html",
    "revision": "765eca67348259c767f2f654368ef17d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
