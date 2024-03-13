import { db, Project, Site,Blog } from 'astro:db';

export default async function() {
	await db.insert(Site).values([
		{ name: 'indatechno', description: 'Crypto project specialist', url: "https://indatechno.com", discord: "https://indatechno.com", telegram: "https://t.me/indatechno", twitter: "https://x.com/indatechno"},
	  ]);

	await db.insert(Project).values([
	  { id: 1, name: 'Crossfi', body: 'next-generation digital ecosystem. We synthesize the stability of traditional finance with the transparency and security of blockchain technology', url: "https://crossfi.org", discord: "https://crossfi.org", telegram: "https://t.me/crossfichain", twitter: "https://x.com/crossfichain"},
	  { id: 2, name: 'Taiko', body: 'Decentralized, Ethereum-equivalent (Type 1) ZK-EVM.', url: "https://taiko.xyz/", discord: "https://discord.gg/taikoxyz", telegram: "https://t.me/crossfichain", twitter: "https://x.com/crossfichain"},
	  { id: 3, name: 'Zetachain', body: 'With ZetaChain’s Omnichain Smart Contracts, build truly interoperable dApps that span multiple chains from Ethereum to Bitcoin and beyond. Access all of crypto from one chain.', url: "https://www.zetachain.com/", discord: "https://discord.gg/taikoxyz", telegram: "https://t.me/crossfichain", twitter: "https://x.com/crossfichain"},
	])

  }