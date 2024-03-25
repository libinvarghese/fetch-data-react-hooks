#!/usr/bin/env sh

check_staged()
{
  local stagedFiles;
  stagedFiles=$(git status --porcelain | awk '/^.[^ ]/{print $2}')
  local status;
  status='error'
  if [ -z "${stagedFiles}" ]; then
    status='success'
  fi

  echo ${status}
}
