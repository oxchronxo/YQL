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
	
	init_a = 0;
	init_b = 0;
	while (init_b <= 255) {
		mky[init_b] = psw[init_b % psw.length];
		sbx[init_b] = init_b;
		++init_b;
	}
	delete init_b;
	
	init_c = 0;
	init_d = 0;
	while (init_c <= 255) {
		init_a = (init_a + sbx[init_c] + mky[init_c]) % 256;
		init_d = sbx[init_c];
		sbx[init_c] = sbx[init_a];
		sbx[init_a] = init_d;
		++init_c;
	}
	delete init_a;
	delete init_c;
	delete init_d;
	
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
