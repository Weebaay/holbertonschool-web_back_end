// 2-hbtn_course

export default class HolbertonCourse {
	constructor(name , length, students) {

		if (typeof name !== 'string') {
			throw new Error('Name must be a string');
		}
		if (typeof length !== 'number') {
			throw new Error('Length must be a number');
		}
		if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
			throw new Error('Students must be an array of strings');
		}

		this._name = name;
		this._length = length;
		this.students = students;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		if (typeof value !== 'string') {
			throw new Error('Name must be a string');
		}
		this._name = value;
	}

	get length() {
		return this._length;
	}

	set length(value) {
		if (typeof value !== 'number') {
			throw new Error('Length must be a number');
		}
		return this._length = value;
	}

	get students() {
		return this._students;
	}

	set students(value) {
		if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
			throw new Error('Students must be an array of strings');
		}
		return this._students = value;
	}

}