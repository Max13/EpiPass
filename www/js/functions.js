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
    var $phpjs = new PHP_JS();
    var str;
    for (x in userInfo)
    {
	if (userInfo[x])
	{
	    str = $phpjs.htmlentities(userInfo[x]);
  	    $('.'+x).html('<strong>'+str+'</strong>');
	    str = '';
	}
    }
}

function	put_info_in_id()
{
	for (x in userInfo)
		$('#'+x).val(userInfo[x]);
}
