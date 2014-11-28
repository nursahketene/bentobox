helpers do
  def cycle(*args)
    args[@_cycle = ((@_cycle || -1) + 1) % args.count]  
  end
end
