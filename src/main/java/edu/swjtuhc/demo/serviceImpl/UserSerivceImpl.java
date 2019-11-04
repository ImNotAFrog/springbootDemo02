package edu.swjtuhc.demo.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.swjtuhc.demo.mapper.UserMapper;
import edu.swjtuhc.demo.model.SysUser;
import edu.swjtuhc.demo.service.UserService;

@Service
public class UserSerivceImpl implements UserService{

	@Autowired
	UserMapper userMapper;
	
	@Override
	public List<SysUser> getAllUsers() {
		// TODO Auto-generated method stub
		return userMapper.selectAllUsers();
	}
	
}
