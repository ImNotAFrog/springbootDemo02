 package edu.swjtuhc.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.swjtuhc.demo.model.SysUser;
import edu.swjtuhc.demo.service.UserService;

//JSON格式
//RESTful风格

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping("/getAll")
	public List<SysUser> getAll(){
		return userService.getAllUsers();
	}
	
	@RequestMapping("/getlist")
	public List<SysUser> getlist(){
		return userService.getAllUsers();
	}
	
	
	@RequestMapping(name = "/create",method=RequestMethod.GET)
	public List<SysUser> create(@Param(value = "user") String user0){
		System.out.println(user0);
		List<SysUser> list = new ArrayList<>();
		SysUser user = new SysUser();
		user.setName("123");
		list.add(user);
		return list;
	}
}
