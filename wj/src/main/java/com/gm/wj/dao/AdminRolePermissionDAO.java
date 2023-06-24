package com.gm.wj.dao;

import com.gm.wj.entity.AdminRolePermission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface AdminRolePermissionDAO extends JpaRepository<AdminRolePermission, Integer> {
    List<AdminRolePermission> findAllByRid(int rid);
    List<AdminRolePermission> findAllByRid(List<Integer> rids);
    void deleteAllByRid(int rid);
}
