export function convert(value) {
	var unixtimestamp = value
	var months_arr = [
		'Янв',
		'Фев',
		'Март',
		'Апр',
		'Май',
		'Июнь',
		'Июль',
		'Авг',
		'Сент',
		'Окт',
		'Нояб',
		'Дек'
	]
	var date = new Date(unixtimestamp * 1000)
	var year = date.getFullYear()
	var month = months_arr[date.getMonth()]
	var day = date.getDate()
	var hours = date.getHours()
	var minutes = '0' + date.getMinutes()
	var seconds = '0' + date.getSeconds()
	var convdataTime = `${day}-${month}-${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
	return convdataTime
}
