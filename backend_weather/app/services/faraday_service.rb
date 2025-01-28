class FaradayService
  def self.get(url)
    connection = Faraday.new(url: url) do |conn|
      conn.adapter Faraday.default_adapter
      conn.headers["Content-Type"] = "application/json"
    end

    response = connection.get
    if response.success?
      JSON.parse(response.body)
    else
      { error: "Request failed", status: response.status }
    end
  end
end
