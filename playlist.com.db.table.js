function decrypt(src) {

	var key = "sdf883jsdf22";
	var str = "";
	var sbx = [];
	var mky = [];
	var ptx = [];
	var psw = [];
	var chr = [];
	
	ptx_a = (src.substr(0, 2) == "0x") ? 2 : 0;
	while (ptx_a < src.split("").length) {
		ptx.push(parseInt(src.substr(ptx_a, 2), 16));
		ptx_a += 2;
	}
	delete ptx_a;
	
	psw_a = 0;
	while (psw_a < key.split("").length) {
		psw.push(key.charCodeAt(psw_a));
		++psw_a;
	}
	delete psw_a;
	
	nit_a = 0;
	nit_b = 0;
	while (nit_b <= 255) {
		mky[nit_b] = psw[nit_b % psw.length];
		sbx[nit_b] = nit_b;
		++nit_b;
	}
	delete nit_b;
	
	nit_c = 0;
	nit_d = 0;
	while (nit_c <= 255) {
		nit_a = (nit_a + sbx[nit_c] + mky[nit_c]) % 256;
		nit_d = sbx[nit_c];
		sbx[nit_c] = sbx[nit_a];
		sbx[nit_a] = nit_d;
		++nit_c;
	}
	delete nit_a;
	delete nit_c;
	delete nit_d;
	
	chr_a = 0;
	chr_b = 0;
	chr_d = 0;
	chr_e = 0;
	chr_f = 0;
	chr_g = 0;
	chr_h = 0;
	while (chr_h < ptx.length) {
		chr_a = (chr_a + 1) % 256;
		chr_b = (chr_b + sbx[chr_a]) % 256;
		chr_e = sbx[chr_a];
		sbx[chr_a] = sbx[chr_b];
		sbx[chr_b] = chr_e;
		chr_d = sbx[(sbx[chr_a] + sbx[chr_b]) % 256];
		chr_f = ptx[chr_h] ^ chr_d;
		chr.push(chr_f);
		++chr_h;
	}
	delete chr_a;
	delete chr_b;
	delete chr_d;
	delete chr_e;
	delete chr_f;
	delete chr_g;
	delete chr_h;
	
	str_a = 0;
	while (str_a < chr.length) {
		str += String.fromCharCode(chr[str_a]);
		++str_a;
	}
	delete str_a;
	
	return str;
}
