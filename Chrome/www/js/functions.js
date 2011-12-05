function	init_userinfo()
{
	userJson = localStorage.getItem('userInfo');
	if (userJson)
  		userInfo = JSON.parse(userJson);
	else
		userInfo = new Object;
}

function	save_userinfo()
{
	userJson = JSON.stringify(userInfo);
	if (userJson != '')
		localStorage.setItem('userInfo', userJson);
}

function	put_info_in_class()
{
	for (x in userInfo)
  		$('.'+x).html('<strong>'+userInfo[x]+'</strong>');
}

function	put_info_in_id()
{
	for (x in userInfo)
		$('#'+x).val(userInfo[x]);
}
